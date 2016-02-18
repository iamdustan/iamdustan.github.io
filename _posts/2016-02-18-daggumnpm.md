---
layout: post
title: "daggumnpm: a friendly bash utility"
tags:
- bash
summary:
---

No matter what version of [npm](http://npmjs.com/) you use, you likely have had
to destroy your `node_modules` folder and do a clean `npm install` to debug some
issue. This likely isn’t exclusive to npm either, but any package manager.
Regardless, here’s a quick friendly bash script to reinstall your `node_modules`
fresh, let you know when it’s done, and automatically run the previous command.


{% highlight bash %}
alias daggumnpm='rm -rf node_modules && npm i && say "Rerunning `!!` && !!'
{% endhighlight %}

* `!!`: execute the previous command. [https://www.digitalocean.com/community/tutorials/how-to-use-bash-history-commands-and-expansions-on-a-linux-vps#executing-commands-from-your-bash-history](https://www.digitalocean.com/community/tutorials/how-to-use-bash-history-commands-and-expansions-on-a-linux-vps#executing-commands-from-your-bash-history)

