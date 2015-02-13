---
layout: post
title: JSX. The Cognitive Hack
tags:
- reactjs
summary:
---

This short article is intended to convince the JSX holdouts a little bit more on
why HTML in your JavaScript through JSX is a great idea.

---

For years we’ve been taught—and in turn echoed the belief—that HTML is our
structure and JS is our behavior layer. **HTML should only go in \*.html
files.** Now I am certain there are some historical reasons for this, many of
which are likely still relevant if you work in a DOM-as-source-of-truth world.

Then you look at this thing React which speaks of itself as a library for
building UIs and it spits mud in the face of all you hold dear by sticking
this HTML **right in the daggum middle of your JavaScript file. What lunacy is
this?!?!**

Let’s take a step back and give the engineers who built this the benefit of the
doubt for a moment. These are, inarguably, extremely intelligent individuals
working on projects at scale, both in terms of developers touching the codebase
and product size. Not only that, they’re eating their dogfood by using this in
production. (For the uninitiated, React was originally created by the engineers
at Facebook and Instagram where they use it to power their web products.)

Knee-jerk reactions are expected, but let’s move beyond that for a moment.
To echo the sentiments of other folks: **give React half a day**. Literally. If you
already have experience building UIs, you can be productive and confident with
what you are writing with React in a mere 4 hours.

React’s approach fundamentally joins two disparate joints of the same limb
together. Yes, your structure and behavior are no longer spread across
technologies or files. With React components these two parts of the same thing
travel together and *cannot* be separated.

## A short example

Let’s say we want the expressive power of an iOS or Android style `Switch`
component.  Transferring this concept to the web in a `form`-based way, I would
choose to create some HTML around a `checkbox` input to accomplish this because
the interface I would expect for a `switch` is identical to that of a `switch`.

* `onChange` event handlers
* `checked` state (only slightly different semantics from `on|off`)
* `name`
* `id`
* `label`
* et cetera

First, let’s take a quick look at what consuming this component looks like. What
I would would want as the application developer would look something like this:

{% highlight html %}
<form action="/api/endpoint" method="POST">
  <Switch label="Send robots to hug Dustan?" checked={true} />
  <button>Submit</button>
</form>
{% endhighlight %}

Very clear and very expressive, no? Now let’s implement this with React.

{% highlight js %}
/**
 * An iOS or Android style Switch element.
 * The interface is that of a standard input[type="checkbox"] control, with the
 * addition of a `label` property.
 * 
 * Pseudo-ASCII-art UI:
 *   On:  (•|_)
 *   Off: (_|•)
 */
class Switch extends React.Component {
  getInitialState() {
    return {id : this.props.id || UUID()};
  }

  render() {
    var {label, ...props} = this.props;

    return (
      <label htmlFor={this.state.id} className="Switch">
        <span className="Switch-label">{label}</span>
        <div className="Switch-ui">
          <input ref="checkbox" type="checkbox"
            className="Switch-input"
            name={this.state.id}
            {...props} />
          <div className="switch__toggle"></div>
        </div>
      </label>
    );
  }
}
{% endhighlight %}

Speaking only of the JSX part, part of the beauty is that it creates an
automatic cognitive context switch due to the clear, visual structural change.
There is a tight coupling between your behavior and your view. React components
embrace this innate fact and marry them together in a sane and maintainable way;
they co-locate these related concerns.

**JSX is the affordance for your brain to automatically context switch.** This
switch from behavior to view requires no additional effort on your part.

## What about my other concerns?

Granted, this leaves a few pieces of your components concerns out of the
picture. Namely, style and data fetching. The React team isn’t prescriptive
about how *you* choose to solve these problems.

There are a number of CSS in JavaScript approaches (more blasphemy!) such as
[RCSS](https://github.com/chenglou/rcss) and
[react-style](https://github.com/js-next/react-style), and 
[react-future/layout](https://github.com/reactjs/react-future/blob/master/04%20-%20Layout/04%20-%20Inline%20Styles.md).
I would highly recommend Christopher Chedou’s slides on the subject:
[react-css-in-js](https://speakerdeck.com/vjeux/react-css-in-js)

For data fetching, GraphQL was just announced at React Conf and it is seriously
blowing my mind. Watch the video [Data fetching for React applications at
Facebook](https://www.youtube.com/watch?v=9sc8Pyc51uU) and read the Q&A on [this
gist](https://gist.github.com/wincent/598fa75e22bdfa44cf47) by one of
the designers of the system: Nick Schrock.

