---
layout: post
title: Exploring CSS ASTs
date: 2015-04-08T09:00:00-06:00
tags:
- css
- asts
summary:
---

My greatest programming joys over the past few months have been whenever I get
the opportunity to programmatically manipulate the code itself. Ever since
transforming a number of projects containing 100s of modules from [AMD to
Common.js](http://skookum.com/blog/converting-a-project-from-amd-to-cjs-with-recast/),
it's been stewing in my mind.

Though that was JavaScript. Let’s consider CSS for a bit. Professional
experience and the [wisdom](https://speakerdeck.com/vjeux/react-css-in-js) of
[others](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
has shown me repeatedly that CSS as a language has many [footguns](https://en.bem.info/method/#origins-of-the-bem-methodology).
The standard expressions—such as mixins and nesting—that preprocessors bring to
the table don’t protect me from the footguns. In fact they bring more. They
don’t assist in composing and marrying the concerns of a concrete UI component
together, or provide the internal data structure and transformation pipeline to
the developer as a first class citizen.

[ReworkCSS](https://github.com/reworkcss/rework), though, is a bit different
than a typical CSS preprocessor. It’s a tool for sending CSS through a pipeline
and doing anything you can imagine with it. Transform and extend the language,
track internal usage metrics of properties and selectors, or add custom linting.
It’s not an opinionated css-like language that outputs CSS. It’s a preprocessors
foundation. And it’s fast.

[Myth](http://www.myth.io/), [SuitCSS](https://github.com/suitcss/preprocessor),
[Styl](https://github.com/tj/styl), and [Resin](https://github.com/topcoat/resin)
(CSS preprocessor for [Topcoat.io](http://topcoat.io) are built using Rework.

For these reasons rework is my tool of choice when working in the CSS domain.
You have the full power of your programming abilities and ideas at your disposal.

Rework parses a string of CSS and returns to you an abstract syntax tree (AST).
An AST is a tree structure that represents the source file. Simplistically, you
can think of an AST for any language as a defined object containing child array
and objects.

Iterating over arrays and objects and manipulating them is more or less what we
do as developers. To get started manipulating one of these trees it is important
to understand it and know what to look for in your filter and reducing
functions.

It is in this spirit that I forked [@fkling42](https://twitter.com/fkling42)’s
wonderful [Esprima AST Explorer](http://felix-kling.de/esprima_ast_explorer/)
tool to use ReworkCSS. The forked project is available here:
[http://iamdustan.com/reworkcss_ast_explorer/](http://iamdustan.com/reworkcss_ast_explorer/)
and on github:
[https://github.com/iamdustan/reworkcss_ast_explorer](https://github.com/iamdustan/reworkcss_ast_explorer).

In the left pane you can write any valid CSS and in the right pane you can
explore the abstract syntax tree that rework provides you. Please note that
there are a few bugs yet to work out. Namely, the original project has cross-
pane contextual highlighting.

Open up the CSS AST Explorer in your browser while writing a custom transformer
to extend and level up your projects front end code.

Some ideas for rework plugins to get you started:

* Generate a media-query free stylesheet for oldIE: [iamdustan/queryless](https://github.com/iamdustan/queryless)
* Validate CSS naming conventions: [suitcss/rework-suit-conformance](https://github.com/suitcss/rework-suit-conformance)
* Polyfill future w3c specs
* Fail CI suite on overly specific selectors

My hope is that tools like these help you think about software development and
UI development in differently.

**For more inspiration**:

* “Custom CSS Preprocessing” by Nicolas Gallagher. [http://nicolasgallagher.com/custom-css-preprocessing/](http://nicolasgallagher.com/custom-css-preprocessing/)
* “Unlocking the structure of your React applications with the AST” by Gurdas Nijor. [https://www.youtube.com/watch?v=OZGgVxFxSIs&list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr&index=4](https://www.youtube.com/watch?v=OZGgVxFxSIs&list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr&index=4)
* “Scalable web apps: the complexity issue” by Ariya Hidayat.  [http://ariya.ofilabs.com/2012/01/scalable-web-apps-the-complexity-issue.html](http://ariya.ofilabs.com/2012/01/scalable-web-apps-the-complexity-issue.html)
* “Language Tools for Reducing Mistakes” by Ariya Hidayat.  [http://ariya.ofilabs.com/2012/11/language-tools-for-reducing-mistakes.html](http://ariya.ofilabs.com/2012/11/language-tools-for-reducing-mistakes.html)
* [react-docgen](https://github.com/reactjs/react-docgen) and [react-autodoc](https://github.com/Skookum/react-autodoc)

