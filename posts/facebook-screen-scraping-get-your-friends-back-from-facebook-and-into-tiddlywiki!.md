---
date: 2007-10-23
title: Facebook Screen Scraping - Get your friends back from Facebook and into TiddlyWiki!
tags: ["Facebook","Facebook Application","Osmosoft","screenscraping","SimonMcManus","tiddlywiki","post"]
---
One of the great things about TiddlyWiki is that it can import information from any number of sources, what with all the fuss going on around the walled gardens of facebook this seemed like a great application. This is not a finished application, far from it. It does however prove that you can get your information back from facebook in a form you can control.  
  
In this particular example I have only extracted the list of friends. The code is also there to import your news feed (from which you could then generate an RSS feed!) although it requires some more coding to get it working. Currently there are two lines in the recipe file which are commented out :  
  
#tiddler: ../../feeds/FacebookNewsFeed.tiddler  
#tiddler: ../../adaptors/FacebookNewsAdaptorPlugin.js  
  
uncommenting this should let you play with the news feed adaptor.  
  
Unfortunately the login is also not working. To import your friends you will need to have two tabs open, one logged into Facebook, and the other using the Facebook Tiddlywiki import. You can ignore the prompts.  

### So how does it all work?

  
So firstly I should thank Martin Budden who I have been constantly asking for help recently. He is responsible for creating the original adaptors and helping me get them started.  
  
In order to use this code you will need to become familar with the process of cooking a TiddlyWiki. Hopefully this link will help you :  
  
http://trac.tiddlywiki.org/wiki/ProductionProcess  
If not please let me know and we will try to get a better guide written.  
  
You can see the files which make up this vertical from the rest.html.recipe. Below is quick summary of each of the important files :  
  
**taggingContent.tiddler**  
  
Its used by the links to display all tiddlers tagged news.  
**  
feeds/FacebookFriendsFeed.tiddler  
**  
  
Tells tiddlyWiki that there is a facebook friends feed available.  
  
**adaptors/FacebookFriendsAdaptorPlugin.js**  
  
Tells TiddlyWiki how to deal with the information in the facebook friends feed. This is where most of the screen scraping is done.  
  
I hope this gives enough info for people to start playing around. If there is any more detail required then please let me know via a comment. The source for this project can be found :  
  
http://svn.tiddlywiki.org/Trunk/contributors/SimonMcManus/verticals/testFacebook/  
  
enjoy.

        