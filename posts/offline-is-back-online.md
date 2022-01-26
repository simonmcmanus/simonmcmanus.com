---
date: 2008-08-11
title: Offline is back Online
tags: ["BT","ccTiddly","Osmosoft","osmososft","SimonMcManus","tiddlywiki","post"]
---
Sorry I haven't blogged for a while...I've been keeping myself busy with several changes to ccTiddly!  
  
I'm pleased to announce the imminent release of [ccTiddly](http://tiddlywiki.org/wiki/CcTiddly) v1.7! This version of ccTiddly was originally going to contain the new server side plugin functionality. It was decided that the next release would contain so much new functionality that it would be inappropriate and in fact confusing to release it as v1.6.5, and so v1.7 does not include server side plugins. Plugins are still planned for the next release: ccTiddly v1.8.  

Syncing Functionality
---------------------

  
From v1.7 of ccTiddly onwards, users will be able to take a copy of a ccTiddly workspace (collaborative wiki) with them on a train, plane or anywhere without an internet connection. While a user is offline the wiki will save changes locally like a conventional TiddlyWiki file.  
  
When the user has finished making changes offline, and when reconnected to the internet, they can click the sync button on their local version of ccTiddly and their changes will be sent back to the server.  
  
Based on the changes, TiddlyWiki will show the following options before syncing:  
  
![](http://farm4.static.flickr.com/3188/2731660267_fd75c77b85.jpg)  
  
This is very new functionality. It's working in Firefox nicely. Unfortunately, I now need to get it working in IE6. Given that IE6 is likely to be challenging, I don't want to make any promises about release dates. However I suspect it will be out in the next few weeks! If you can't wait to have a play the code is in the [TiddlyWiki subversion repository](http://svn.tiddlywiki.com)[.](http://svn.tiddlywiki.com)  
  
By using a TiddlyWiki adaptor, ccTiddly can now provide support for enhancements including lazy loading (see below) and integration with projects such as [TiddlySnip](http://tiddlysnip.com/ "//tiddlysnip.com/") (a firefox extension for moving web content to your wiki).  

New Macros
----------

  
As part of the ccTiddly project, I have been rewriting many of the ccTiddly macros so that they work with TiddlyWiki slightly better than they did originally.  
  
ccTiddly 1.7 will introduce the following new macros :  
  
```js
<<ccLogin>>
```
  
  
Ok, so this is not a new macro but it's been completely redesigned and making full use of the TiddlyWiki wizard framework. It has also been integrated with the register macro. If the register macro is installed there will be a register button on the login screen.  
  
I hope to extend this mechanism for things like [OpenID](http://openid.net/ "//openid.net/") login.  
  
```js
<<ccEditWorkspace>>
```
  
  
This macro will allow users to update the permissions on an existing workspace. It currently only allows users to set permissions for anonymous users but will be extended to support setting permissions for admins, logged in users and possibly groups.  
  
```js
<<ccManage>>
```
  
  
The ccManage macro will allow workspace administrators to grant other users administration access to a given workspace.  

New Skins
---------

  
TiddlyWiki recently introduced the concept of single tiddler themes. These allow developers to pack many different tiddlers into a single tiddler which makes up a theme e.g. stylesheet, pageTemplate and viewTemplate. ccTiddly now makes full use of the theme mechanism. We will distribute ccTiddly 1.7 with three themes.  
  
![](http://farm4.static.flickr.com/3024/2753077987_cd23bdd133.jpg)  

Improved Architecture
---------------------

  
We have now reached an important milestone in ccTiddly where the Javascript and PHP code are completely separate. This greatly simplifies ccTiddly. All modification to theTiddlyWiki file are loaded from the /tiddlers/ folder as either .js files or .tiddler files.  
  
There is a file: /includes/ccAssignments.php which creates the ccAssignments tiddler. This is the only point where the PHP and Javascript cross over.  
  
Any requests made from the client to the server are handled by a file in the /handle/ folder.  

Lazy Loading
------------

  
With "Lazy loading" a subset of tiddlers are loaded in the first instance, and then others are only loaded upon request.  
  
In ccTiddly, it's possible to pass the tags variable in the URL. If the tags variable is specified in the URL, the ccTiddly workspace will only load tiddlers with the specified tag. For example;  
  
tags=task  
  
...would only return the tiddlers tagged 'task' in the requested workspace. If users click on links to tiddlers which are not tagged task, they would be loaded at that point.  
  
This technique can be used to dramatically improve loading times of TiddlyWiki files. As soon as ccTiddly v 1.7 is available I will announce it on the [ccTiddly groups](http://groups.google.com/group/ccTiddly "//groups.google.com/group/ccTiddly").

        