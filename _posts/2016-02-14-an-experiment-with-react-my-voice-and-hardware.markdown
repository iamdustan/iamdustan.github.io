---
layout: post
title: An Experiment with React, My Voice, and Hardware.
tags:
- react
- react-hardware
summary:
---

I’ve been playing with creating a React renderer for hardware off and on over
the past year. If you follow me on Twitter you may have seen that a milestone
was reached two days ago when [React Hardware and the React Devtools became friends](https://twitter.com/iamdustan/status/698616826209501184).

I’ve been looking for a reason to play with the [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
API. Chrome implemented the API a year or so ago and Firefox has support coming
quickly. With all the pieces in place it sounded like a fun way to spend an hour
of my evening.

The code in the following example will be cleaned up a tiny bit and pushed to
GitHub this week, but I hope this video is as exciting for you as it is for me.

React in a browser doing speech recognition to communicate with React hardware
turning an LED on and off. All while conveniently viewing the render tree and
state from the comfort of the React Devtools.

<iframe width="420" height="315" src="https://www.youtube.com/embed/_Kz8lito3U8" frameborder="0" allowfullscreen></iframe>

