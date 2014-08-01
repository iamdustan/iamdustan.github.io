---
layout: post
title: Flexbox your buttons.
tags:
- css3 flexbox
summary:
---

There are certain properties that are not consistently applied across
elements. If you’ve ever tried to style a `<select />` or `<input type="file"
/>` element you have experienced this.

This doesn’t apply only to the visual styles we were pained by in the past, but
also by layout properties such as `display: block;`.

I am working on a Phonegap project these days so I have a rather narrow range of
rendering engines to support. The layout for most of the app just totally ate it
on Android 4.3. I chocked it up to just being part of “[the android
browser](http://slides.com/html5test/the-android-browser#/)”.

Then I switched to using Firefox as my primary browser and the same layout bug
was staring me in the face.

A simplified version looks like the following:

{% highlight html %}
<style>
button {
  display: flex;
  width: 100%;
}

button div {
  flex: 1;
  color: #fff;
  background: #ff8800;
}
button div:first-child {
  background: #ff0088;
}
</style>

<button>
  <div>Left</div>
  <div>Right</div>
</button>
{% endhighlight %}

[JS Bin](http://jsbin.com/jutafira/2/embed)

<figure>
  <img src="/assets/2014-07-28-flexbox-buttons/flex-button-in-gecko.png">
  <figcaption>Flex button in Gecko</figcaption>
</figure>
<figure>
  <img src="/assets/2014-07-28-flexbox-buttons/flex-button-in-blink.png">
  <figcaption>Flex button in Blink</figcaption>
</figure>

Now I realized it wasn’t just the Android view that was buggy, but perhaps
FireFox as well.

It turns out that this *isn’t* a bug. There is ambiguity in the spec that certain
elements have certain properties that are implementation-specific. It just so
happened that certain versions of Blink and Webkit allow `display: flex` on
`button`’s where as Gecko and other versions of Webkit do not. I am unsure what
Trident thinks of this.

(See [@dholbert](https://twitter.com/CodingExon) resopnse to this issue on
[Bugzilla #984869](https://bugzilla.mozilla.org/show_bug.cgi?id=984869#c2))

# TLDR

All of that to say that the following does not work:

{% highlight html %}
<div class="list-of-actionable-things">
  <button class="flex">
    <div class="flex-1"><img src="/an/avatar/" /></div>
    <div class="flex-2"><strong>Username</strong></div>
    <div class="flex-2"><span>Last updated: yesterday</span></div>
  </button>
  <!-- ... -->
</div>
{% endhighlight %}

To get around this you need to put an extra element inside the `button`. 

{% highlight html %}
<div class="list-of-actionable-things">
  <button>
    <div class="flex">
      <div class="flex-1"><img src="/an/avatar/" /></div>
      <div class="flex-2"><strong>Some text</strong></div>
      <div class="flex-2"><span>Last updated: yesterday</span></div>
    </div>
  </button>
  <!-- ... -->
</div>
{% endhighlight %}

[JS Bin](http://jsbin.com/jutafira/3/embed)

<figure>
  <img src="/assets/2014-07-28-flexbox-buttons/flex-button-in-gecko.png">
  <figcaption>Flex button’s everywhere</figcaption>
</figure>

