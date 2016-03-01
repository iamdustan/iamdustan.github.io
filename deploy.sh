#!/usr/bin/env bash
#
# A quick and dirty script to deploy publish the website to github’s gh-pages
# branch. This is a destructive action.
#

git checkout -b tmp-build
gatsby build
cp CNAME public/CNAME
git add public -f
git commit -m 'build'
git push origin :master
git subtree push --prefix public origin master
git checkout gatsby
git branch -D tmp-build

