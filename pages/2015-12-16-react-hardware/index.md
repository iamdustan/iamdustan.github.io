---
layout: post
title: React Hardware
tags:
- react, react-hardware
summary:
---

React is proving that its component-driven architecture and abstractions hold up
beyond browser-based user interfaces. React Native is bringing React’s authoring
and architectural style to iOS and Android. [Guillaume Plique](https://github.com/Yomguithereala)
has written a [react-blessed](https://github.com/Yomguithereal/react-blessed)
renderer for terminal-based UIs. Netflix has written React bindings for their
proprietary Gibbon rendering engine ([React Conf 2015 talk](https://www.youtube.com/watch?v=eNC0mRYGWgc)).
I’ve been writing a renderer for the Firmata protocol so that you can manipulate
the real world with React.

Firmata is a standard protocol based on the midi message format for
communicating with microcontrollers from software running on a computer. There
are Firmata client bindings available in many languages: [https://github.com/firmata/protocol#firmata-client-libraries](https://www.youtube.com/watch?v=eNC0mRYGWgc)

## Declarative Hardware

I’ve had an arduino sitting on my desk at home for the past 3 years. One of the
stumbling blocks to programming it was that I didn’t have a clear picture of how
to manage state on it. After using React for a few months, the idea that your
interface is the [function of state and props](https://speakerdeck.com/jmorrell/jsconf-uy-flux-those-who-forget-the-past-dot-dot-dot-1?slide=4)
sounded quite appealing for hardware. What if one could merely say what the
physical hardware should look like and let React make it so? What if this was
able to create a blinking LED?

``` jsx
  /*
    Blink
    Turns on an LED on for one second, then off for one second, repeatedly.
  */
  var React = require('react-hardware');
  var {Board, Led} = React;

  var Program = React.createClass({
    getInitialState() {
      // 0-255
      return {value: 0};
    },

    componentWillMount() {
      this._interval = null;
    },

    componentDidMount() {
      this._interval = setInterval(() => {
        var value = this.state.value === 255 ? 0 : 255;
        this.setState({value})
      }, 1000);
    },

    componentWillUnmount() {
      clearInterval(this._interval);
    },

    render() {
      return (
        <Board>
          <Led pin={13} value={this.state.value}
        </Board>
      )
    }
  });

  React.render(<Program />, '/dev/cu.usbmodem1411');
```

Now what if you want a second flashing LED to compose together with the first?
Extracting the concept of an interface component into its own isolated world
with clear compositional boundaries—like this flashing LED—is a place where
React shines.

``` jsx
var React = require('react-hardware');
var {Board, Led} = ReactArduino;

var FlashingLed = React.createClass({
  getInitialState() {
    return {value: this.propsstate.initialValue || 0};
  },

  getDefaultProps() {
    return {interval: 1000, delay: 0};
  },

  componentWillMount() {
    this._interval = null;
  },

  componentDidMount() {
    var start = () => {
      this._interval = setInterval(() => {
          var value = this.state.value === 255 ? 0 : 255;
          this.setState({value});
        },
        this.props.interval
      );
    };

    setInterval(start, this.props.delay);
  },

  componentWillUnmount() {
    clearInterval(this._interval);
  },
});

var Program = React.createClass({
  render() {
    return (
      <Board>
        <FlashingLed pin={13} interval={1000} />
        <FlashingLed pin={14} interval={1000} delay={500} />
      </Board>
    )
  }
});

React.render(<Program />, '/dev/cu.usbmodem1411');
```

## The Future of Hardware

This would not be possible without the amazing work of the React team and the
nodebots community: Rick Waldron and the [Johnny-Five](http://johnny-five.io/)
contributors, the [Cylon.js](http://cylonjs.com/documentation/getting-started/)
team, Julian Gautier for the Firmata bindings, and Chris Williams have all
created amazing things that make this possible.

Now imagine what will happen when we bring the developer workflow React provides
to hardware. Imagine what people will create when we can provide educational
warnings and alerts during the code-writing phase. Imagine running your hardware
code in a browser attached to [React Developer Tools](https://github.com/facebook/react-devtools)
to inspect and manipulate the state of your board on the fly. What becomes
possible when Dan Abramov’s [React Hot Loader](http://gaearon.github.io/react-hot-loader/)
is connected to your hardware devices?

Currently, the code works for digital and analog writes and reads. Adding simple
components has become [quite trivial](https://gist.github.com/iamdustan/d4e924e7766967130bd0).
Although the project is in it’s early days, you can get started now with `npm install react-hardware`.
There are still a few core React things that need to be completed before an
official release of any sort.

## What’s next?

I’m currently in the process of rewriting the entire codebase to be simpler and
more idiomatic as well as align with the direction React is going. Unit tests
are good to have, too. What you find on github today is a great proof of
concept. What will be coming soon is a real project with documentation, tests,
and integration into the greater React ecosystem.

