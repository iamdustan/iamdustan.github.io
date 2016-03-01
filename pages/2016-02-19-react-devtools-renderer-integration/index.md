---
layout: post
title: React Devtools-Renderer Integration
tags:
- react
- react-hardware
summary:
---

Integrating React Hardware with the React DevTools was a goal from the first day
of the project. As mentioned in my previous article on [creating a renderer](http://iamdustan.com/2016/01/18/react-custom-renderers/),
I consider interoperability with the existing ecosystem to be of utmost importance.

This mission was accomplished this past weekend with some helpful guidance from
[@matthewwithanm](https://twitter.com/matthewwithanm). This article will begin
with a few incorrect assumptions I had about how React, React Native and the
DevTools interacted and end with a couple guidelines to writing your own
renderer that can interoperate with the React DevTools.

<figure>
  <img src="react-hardware-electron-devtools.gif">
  <figcaption>React Hardware and React DevTools in an Electron Shell</figcaption>
</figure>

> Disclaimer: these are undocumented, internal APIs. There is active work to
> create a first class devtool API in React. There is no guarantee that the
> contents of this article will be accurate at any time in the future. I
> personally expect that there will be a better solution in the next release or
> two of React.

I will attempt to use *DevTools* when referring to the official [React DevTools](https://github.com/facebook/react-devtools/),
and *devtools* when referring to the generic concept of a developer tool.

## Incorrect Assumptions

I had two completely incorrect assumptions that led me on quite the journey in
trying to get this to work.

* Renderer code has to run in the browser
* Implementation internals don’t matter

I had assumed that the renderer must run in the browser to connect to the DevTools
based on two observations.

1. The (no longer supported) React Native integration involves packaging up the
  JS and loading it in a browser (as opposed to [JavaScriptCore](http://trac.webkit.org/wiki/JavaScriptCore) on the device).
2. The current devtools hook involves the DevTools defining the property `__REACT_DEVTOOLS_GLOBAL_HOOK__`
  on the `window` object.

A renderer is then responsible to look for this property and call `__REACT_DEVTOOLS_GLOBAL_HOOK.inject({...})`
with a few internal modules for the DevTools to hook into. For example, you
would inject your `CustomMount` and `CustomRendererComponent` into this.

The fact that each official renderer injects some internals into the DevTools
and has a different internal `Mount` API should’ve been enough to inform my
brain that the devtools may be looking at or modifying these objects. Alas, it
took much trial and error and help from others and reading of code to see what
reality.

## Integration Points

Once again, [@matthewwithanm](https://twitter.com/matthewwithanm) showed me that
Nuclide has first-class support for React Native.

<figure>
  <img src="react-native-nuclide.gif">
  <figcaption>React Native and React DevTools in Nuclide</figcaption>
</figure>

[@alex_frantic](https://twitter.com/alex_frantic) mentioned that it should *just
work* for any other renderer. I had the DevTools and React Hardware definitely
connecting in some capacity, but nothing was working.

I spent a couple nights adding logs to [React core](https://twitter.com/dan_abramov/status/700658352850743296),
the DevTools codebase, and React Hardware to get a sense for what was happening
and where what was running.

Eventually I found the following files:

* ReactNative’s [`setupDevTools.js`](https://github.com/facebook/react-native/blob/9a93a3cba47722a590a8912a5ace1c479eb4178a/Libraries/Devtools/setupDevtools.js)
* ReactDevtools’ [`attachRenderer.js`](https://github.com/facebook/react-devtools/blob/master/backend/attachRenderer.js)

For completeness, ReactDOM 0.15’s implementation is located in the source [ReactDOM.js](https://github.com/facebook/react/blob/master/src/renderers/dom/ReactDOM.js#L45-L69)

### Duck punch monkey patch

React DevTools are doing what I like to call the *duck punch monkey patch*. For
all the gory details take a read through the files in [react-devtools/backend/integration](https://github.com/facebook/react-devtools/tree/master/backend/integration).
In there you will find test cases against each official renderer.

To work with React Devtools *today* you need to ensure your *RendererMount*
interface looks like React Native, React 0.14, or React 0.15. There are a few
key points:

* `Mount.renderComponent/_renderNewRootComponent` must return a ReactComponent
* `Mount.renderComponent` must set `_instancesByReactRootID` correctly. Keep in
  mind you’ll likely want to clean up this object to prevent memory leaks.
* `Mount._instancesByReactRootID` must exist for the devtools (I *think* you
  have an option between that interface or what React Native uses.)

In addition, you will likely be writing your own *CustomRendererComponent*.
There is one property (that I’m currently aware of) this must hold as well:

* `mountComponent`: must return an identifier or lookup string. React Native
  returns an identifier hash of sorts whilst ReactDOM returns the markup string.
  In React Hardware I’m simply [returning the RootID](https://github.com/iamdustan/react-hardware/blob/rewrite/src/ReactHardwareComponent.js#L187)
  which is working so far.

## `window.__REACT_DEVTOOLS_GLOBAL_HOOK__`

Remember the `setupDevtools.js` file from earlier? That file is responsible for
setting up a websocket to the DevTools backend. When initialized, the DevTools
backend sends over a JavaScript program that `setupDevtools.js` evals.

As long as you have aliased your environments global object to `window` the
DevTools program can define the `__REACT_DEVTOOLS_GLOBAL_HOOK__` for a renderer
to inject into.

React Hardware runs in node, so we simply alias `GLOBAL` to `window`, start a
websocket server for the DevTools to connect to, and step one is complete. At
this point the DevTools and the renderer are communicating.

The next step is a bit trickier to debug and verify. Here you need to ensure
that your renderer is able to get duck-punched-monkey-patched. Since this is not
a first class API you won’t be in for a great time. No debugging, error, or
warning messages will be printed for you. Good luck! ;)

## DevTools today and the future

The DevTools monkey patching wraps a few renderer methods to emit a handful of
events:

* `root`
* `mount`
* `update`
* `unmount`

I believe that this is to provide enough information to reconstruct the Render
tree.

In the future these integration points will become clearer. This is
unquestionably a good thing, but will also likely bring a bit of pain for any
who join the custom renderer club. The following issues in React core are
great to follow if you are interested in following along as these APIs become
first class.

* Umbrella: New Devtools API: https://github.com/facebook/react/issues/5306
* Include DevTools as Public API: https://github.com/facebook/react/issues/4593
* Anything by @gaearon: https://github.com/facebook/react/pulls/gaearon

The following articles were extremely helpful in putting together a mental model
of the different pieces:

* [https://medium.com/@shaheenghiassy/deep-diving-react-native-debugging-ea406ed3a691#.rj1vniqos](https://medium.com/@shaheenghiassy/deep-diving-react-native-debugging-ea406ed3a691#.rj1vniqos)
* [http://blog.nparashuram.com/2016/02/writing-custom-debugger-for-reactnative.html](http://blog.nparashuram.com/2016/02/writing-custom-debugger-for-reactnative.html)

---

Follow me on Twitter [@iamdustan](https://twitter.com/iamdustan) to learn more.
I’ll be at React Conference on February 22nd and 23rd if you want to talk more
about React, renderers, and internal APIs.

