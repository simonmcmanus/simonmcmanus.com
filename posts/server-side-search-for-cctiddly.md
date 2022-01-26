---
date: 2008-01-15
title: Server Side Search for ccTiddly.
tags: ["ccTiddly","optimisation","osmososft","server side search","speed","tiddlywiki","post"]
---
We are starting to deploy [ccTiddly](http://www.tiddlywiki.org/wiki/CcTiddlyDeveloper "ccTiddly") within BT and have been importing various types of data. In the same way that users experience issues with a [Tiddlywiki](http://tiddlywiki.com/ "Tiddlywiki") files greater than 1 or 2 mbs the same issue occurs on ccTiddly.  
  
Being server side there are a number of things we can do to reduce these issues. One idea we have is only loading the title data for each of the tiddlers onLoad. With such techniques the client side search (and some other areas) will lose value. As a result I have started experimenting with a server side search solution for ccTiddly.  
  
The nice thing about this code is that it can later be used to search across revisions, tiddlywiki's bag's and even across different servers. It could also be modified quite easily to incorporate google search results.  
  
The code is made up of two parts :  
  
The plug-in (you need to update the server,  url and then create a tiddler and tag it with systemConfig) :  
  
Plugin :  
  
[search.txt](https://simonmcmanus.files.wordpress.com/2008/01/search.txt "search.txt")  
  
PHP Code :  
  
[searchphp.txt](https://simonmcmanus.files.wordpress.com/2008/01/searchphp.txt "searchphp.txt")  
  
(you will need to rename the file from searchphp.txt to search.php)  
  
This code has been written for ccTiddly 2.0 but you should be able to get it working on ccTiddly 1.2 with minimal problems. In this case search.php was added to a folder called 'handle' in the root ccTiddly directory.  
  
This is the format we will be using in ccTiddly 2.x  
  
A temporary example of this script can be found running at :  
  
[http://wikidev.osmosoft.com/search#search](http://wikidev.osmosoft.com/search#search "http://wikidev.osmosoft.com/search#search") - Please note this is a dev server only.

        