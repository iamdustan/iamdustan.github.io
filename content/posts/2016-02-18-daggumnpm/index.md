---
layout: post
title: "daggumnpm: a friendly bash utility"
date: 2016-02-18T09:00:00-06:00
tags:
- bash
summary:
---


**Update: there is an updated version of this at [/2016/05/11/reinstall-daggumnpm/](/2016/05/11/reinstall-daggumnpm/)**

No matter what version of [npm](http://npmjs.com/) you use, you likely have had
to destroy your `node_modules` folder and do a clean `npm install` to debug some
issue. This likely isn’t exclusive to npm either, but any package manager.
Regardless, here’s a quick friendly bash script to reinstall your `node_modules`
fresh, let you know when it’s done, and automatically run the previous command.

``` bash
alias daggumnpm='rm -rf node_modules && npm i && say "Rerunning `!!` && !!'
```


If you’ve used node at all the first two commands should be straightforward.


* `rm`: remove things. `-rf` means recursively destroy a directory.
* `npm i`: alias for `npm install`
* `say "Rerunning \`!!\`": use your computers robot voice to audibly say Running
  whatever that double exclamation point is.
* `!!`: This is the fun one. Execute the previous command. [https://www.digitalocean.com/community/tutorials/how-to-use-bash-history-commands-and-expansions-on-a-linux-vps#executing-commands-from-your-bash-history](https://www.digitalocean.com/community/tutorials/how-to-use-bash-history-commands-and-expansions-on-a-linux-vps#executing-commands-from-your-bash-history)
  For example, you ran `npm start` and it failed with some dependency issue.
  `daggumnpm` will do a clean npm install and rerun `npm start` for you.

