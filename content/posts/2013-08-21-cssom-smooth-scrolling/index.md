---
layout: post
title: CSSOM Smooth Scrolling
date: 2013-08-21T09:00:00-06:00
tags:
- web development
summary: 
---

**Update: demo and documentation site: [iamdustan.com/smoothscroll/](http://iamdustan.com/smoothscroll/)**

## Coming soon to a browser near you

Paul Irish recently shared on [Google+](https://plus.google.com/+PaulIrish/posts/XgLrpPS8vm8)
that the CSSWG has [standardized smooth
scrolling](http://dev.w3.org/csswg/cssom-view/#scroll-an-element-into-view) on behalf of web developers everywhere. This means no more jQuery or other such javascript to simply scroll to an element.

In the future you&rsquo;ll be able to declare smooth scrolling in your
css with `body { scroll-behavior: smooth }` or programmatically by using
`window.scrollTo(x, y, 'smooth');` or
`document.getElementById('offscreenElement').scrollIntoView(true, 'smooth')`.

Yet another fine example of browsers standardizing a behavior developers
have been using for years.

## Available today to a polyfill near you

I have wrapped the programmatic version into a simple polyfill. You can
grab it off my github account [iamdustan/smoothscroll](https://github.com/iamdustan/smoothscroll)
or install it with `bower install smoothscroll --save`.

I&rsquo;ve never attempted to polyfill a css property, but I hope to
find a solution so that simply including this script on the page and
adding `body { scroll-behavior: smooth }` will give you smooth scrolling
for all internal anchors.

Oh, and don&rsquo;t worry about file size. It&rsquo;s only 243 bytes
gzipped.



