---
layout: post
title: Books of 2013
tags:
- reading list
summary:
---

After accidentally reading 42 books in 2012, I had quietly set myself
the goal of reaching 52 books in 2013. With a last minute book off of
Lean Pub I pulled it off with 1 minute 12 seconds to spare.

## The List

<table class="numbered">
  <thead>
    <tr>
      <th scope="col"><span class="visuallyhidden">Number</span></th>
      <th scope="col">Book</th>
      <th scope="col">Author</th>
      <th scope="col" style="width:7em">Finished Date</th>
    </tr>
  </thead>
  <tbody>
    {% for book in site.data.2013_books %}
    <tr>
      <td>{{ forloop.index }}</td>
      <td>{{ book.title }}</td>
      <td>{{ book.author }}</td>
      <td>{{ book.completed_date }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

## Highlights

There are a few stand out books from this list. First and foremost,
*Thinking Fast and Slow* by Daniel Kahneman is a great book. I am
fascinated by how the human mind works and this was my grand
introduction to psychology. He discusses how our mind works as two
different systems in an engaging way that allows for understanding to
come as you read through. I cannot recommend this book enough.

Having read the *Ender's Game* quartet last year, I picked up the *Bean
Quartet* by Orson Scott Card this year. The first book is the exact same
story as *Ender&rsquo;s Game*, but through Bean&rsquo;s eyes. The
following three books are a much faster paced adventure through an earth
in a not-to-distant future.

*Love Wins* by Rob Bell is a book that received much attention when it
came out&mdash;and not positive attention.. I must say that as a
Christian it greatly challenged my view of God and His love. If nothing
else, it shows God&rsquo;s love in such a greater light than what I had
ever imagined.

I can&rsquo;t remember a single technical book I&rsquo;ve read before
this year that I would strongly recommend. These year there were four. 

David Herman and Reg Braithwaite have written the two best books on
JavaScript. Effective JavaScript and JavaScript Allongé. If you spend
any time at all in JavaScript at a professional level you should read
these books.

Effective JavaScript is a very thorough, dispassionate
explanation of the JavaScript language. It does not dwell on browser
idiosyncracies, yet equips you to understand and handle them should you
encounter them.

JavaScript Allongé is a work of art. Read the reviews on
https://leanpub.com/javascript-allonge. Every single one of them: true.

Ilya Grigorik delves into HTTP, TCP, UDP, WebRTC, WebSockets, **and more**
in his *High-Performance Browser Networking*. Being a front end engineer
for the past 3 years you may expect one to have a fairly solid grasp on
these protocols and their history. I knew nothing about networking before
this book.

*The Senior Software Engineer* by David Bryant Copeland took many of my
thoughts about this craft and said them eloquently. It helped solidify a
few ideas and expand others. Every software engineer should read this,
junior or not.

## 2014?

No. No book reading goal. I am still reading, just for pleasure at
whatever pace it happens to be. Currently, I&rsquo;m embarking on a
adventure through the seven kingdoms in *Game of Thrones*.

I have other goals to focus on now that I have some time back. I have a
handful of public goals on [github](https://github.com/iamdustan/goals/issues)

