---
layout: post
title: console.thingsThatHappenNext();
published: false
tags:
- culture
summary: Ever need to find out *after* a certain method is called?
Recently while tracking down iOS7's lovely crash-happiness in an angular
application I needed just this functionality.

---


```
console.profile('thingsThatHappenNext');
setTimeout(function() {
  console.profileEnd('thingsThatHappenNext');
, 500);
```

