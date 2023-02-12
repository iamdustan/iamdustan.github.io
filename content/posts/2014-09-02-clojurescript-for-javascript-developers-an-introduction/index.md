---
layout: post
title: Learning ClojureScript. For JavaScript Developers
date: 2014-09-02T09:00:00-06:00
tags:
- clojurescript
summary:
---

I’ve wanted to add a functional language to my knowledge belt for quite some
time now. If you check out my [2013 reading list](/2014/01/09/reading-list/) you
may have noticed a Haskell book in there. Haskell was my introduction to thinking
without state, but rather with immutable data structures and the syntax was so
entirely different from what I was used to with JavaScript that I could not
merely port my knowledge for how to solve a problem over in most situations.

Haskell didn’t have much practical benefit to me, either. After getting through
the book there was nothing pushing me onward.

I’ve recently begun my second attempt into the functional world, this time with
ClojureScript. I intend on writing about this journey over the next few months,
so let’s get started.

## Why a functional language?

It took only a tiny introduction to the functional world to realize how
different solving problems could be. My slight foray into Haskell already
changed how I think about building applications and organizing code. I figure I
could get more bang for the educational buck by learning a fundamentally
different way of solving problems with a functional language compared to picking
up another OOP language.

## Why ClojureScript?

There are two closely related, yet distinct points to this that I think are
worth mentioning.

1. Why Clojure/ClojureScript over F#, Scheme, Haskell, OCaml, Erlang,
[et cetera](http://en.wikipedia.org/wiki/Category:Functional_languages)?
2. Why do I think I’ll stick through to competency with the language?

### Why Clojure?

There are some circumstantial reasons that have led to Clojure being on my
radar.

I’ve used many of the leading JavaScript frameworks in production, most recently
React. React is the first tool I’ve used that didn’t leave a bad taste in my
mouth when I was finished. In fact, I’ve rather enjoyed every moment of it and
couldn’t imagine building a browser-based application without it.

One of the books that I started reading this year was the [Structure and
Interpretation of Computer
Programs](http://mitpress.mit.edu/sicp/full-text/book/book.html). I have only
read the first three sections of the first chapter, but that gave me enough lisp
knowledge to understand the basic semantics of languages that follow the lisp
structure.

During this time, [David Nolen](http://swannodette.github.io/) started appearing
again and again in my feed and was talking about all this ClojureScript,
immutable data, core.async stuff. (Aside: it may be worth adding that I
fundamentally believe that the default “complex JavaScript codebase decoupling
through arbitrary events” pattern to be a poor choice, and that my time in the
Angular world was on a team that found the best way to pass data around to just
arbitrarily mutate the nearest object.)

Since my experience and relevancy is rooted entirely in building user interfaces
in the browser world, tools and approaches that I can relate to my problem set
win over other concepts, such as the “proof”-iness that Haskell provides.

### Why will I stick with it?

This is the sticking point. I am a very driven, self-motivated individual, but
am terrible at focusing on any one thing for long enough to complete it. I am
regularly spinning up new experiments and rewriting side projects long before
getting them out the door.

Because ClojureScript can help solve problems I have building user interfaces is
a huge plus to sticking this through. Honestly, that’s probably the primary
reason that I will continue with it for any length of time.

Everything else will be myself experimenting on myself. Setting myself a
commitment to write about my journey I hope is enough perceived social pressure
to keep going.

## What to expect next?

My current expectation is that the next two posts in the [Learning ClojureScript
for JavaScripters](/tags/clojurescript/) series will be a “just enough” syntactic
overview, and then how to solve some common JavaScript problems in ClojureScript.

