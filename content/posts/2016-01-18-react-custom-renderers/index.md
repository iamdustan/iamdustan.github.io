---
layout: post
title: React Custom Renderers
date: 2016-01-18T09:00:00-06:00
tags:
- react
summary:
---

You’re considering building a custom renderer for React and are wondering where to start and what to do? Welcome (to the land of dragons)! Just kidding, it’s not that bad—just undocumented and not officially supported. ¯\\_(ツ)\_/¯

This article is intended to be a high level view of the developer experience a renderer should aim to provide based on my experience with React, writing a renderer, and exploring other custom renderers. Note that this is *not* a guide on how to write a renderer.

tldr;

* React devs are Web devs. Design your APIs accordingly.
* Hide imperative APIs behind declarative ones. This is what makes React, React.
* Progressive disclosure. Use invariants and warnings to educate consumers *while they use it*.
Interop with existing tools such as live reload, React DevTools, and module bundlers.
* Bonus: Share your creations and learnings.

## React Developers are Web Developers

The majority of React Developers are Web Developers first. At the very least the React community is rooted in the web platform. A renderer should implement web-centric APIs on top of the target platform where it makes sense.

For example, you should strongly consider providing CSS Layout for positioning and styling.

If there are form-style input controls they should follow DOM and React controlled vs uncontrolled semantics. Standard form controls such as tab focus, return key, and other expected navigation controls should “just work”.

“Learn once, write anywhere” should be your guiding principle when considering the public API of your renderer.

## Hide imperative APIs behind declarative ones

The public API of components is far more important than the specifics of their implementation. It is the Renderer’s responsibility to take the weight of the platform and simplify it. React does this repeatedly. It takes a stateful world like the DOM and presents you an interface that allows you to simply describe what the DOM should be.

The platform APIs should be accessible as an escape hatch when required. As an example, in the browser environment we escape out of the declarative React authoring model to imperatively manage focus.

As a guideline, a sure sign that there is a better abstraction for you to provide is that your renderer requires the consumer to write lifecycle methods to interact with the target environment to accomplish simple, declarative tasks.

## Progressive Disclosure and Education

Help the developer along. Use warnings and invariants to provide educational messages as to why they are receiving that message and what can be done to rectify it.

React does this when attempting to render a <tr /> directly into a <table />. React Hardware is taking the pin today from the board and verifying that an acceptable mode is being used.

On React Native you are likely familiar with the Red and Yellowboxes (in your face variations on the former examples) which are incredibly helpful to use the project without having to query documentation endlessly. 

Development integration always trumps walls of documentation. Provide the knowledge needed when it is needed.

## Interop with existing tools

The React ecosystem has flourished a bevy of tools. A handful of this could be considered core or foundational. It should be your aim to interop with these.

Hot reloading has been transformative to many UIEs on the web and now with React Native, too. The React team supports Flow type definitions for static analysis regarding program correctness, safety, and documentation. The official React DevTools are a nice addition (not to mention the benefits of running and debugging code in a browser context). Lastly common module bundlers such as Webpack, Browserify, and Rollup should also be able to consume and build for your platform (if a simple `node index.js` does not suffice).

## Share

As with anything in our software community, sharing is an enabler. React’s public API is quite stable and predictable, but the internals are not quite so clear. The use cases and patterns you need to implement your renderer will be extremely useful to the React team as they move towards having a better story for custom renderers. Additional parts of the API are also still being thought up and iterated upon such as a DevTools API.

Be a giant. Share what you learn.

---

Thank you to [Paul O’Shannessy](https://twitter.com/zpao) for reviewing this article.

