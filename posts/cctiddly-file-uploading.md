---
date: 2008-03-20
title: ccTiddly File Uploading
tags: ["ajax","BT","ccTiddly","feedback","osmososft","seo","post"]
---
Over the last couple of days I have been working on the ccUpload macro for [ccTiddly](http://www.tiddlywiki.org/wiki/CcTiddly).  This is a macro that will allow people to upload files to the ccTiddly server so that it can linked to and included in their TiddlyWikis.  
  
The work was in part motivated by [Jon's](http://jaybyjayfresh.com/) requirement to post HTML files and strings to a end point where the file is then uploaded. This is a part of his [template work](http://jaybyjayfresh.com/2008/01/23/tiddlytemplating-using-tiddlywiki-to-create-webpages/) and some SEO work which will naturally fall out from it - that, however, is a completely different blog post.  
  
We are getting to the stage where we have something functional to share and wanted to provide the opportunity for community feedback.  
  
We're introducing three concepts for ccTiddly users; instances, workspaces and user areas.  
  
**Instance**: An area containing multiple workspaces.  
  
**Workspace**: An online area where an individual TiddlyWiki can be stored and maintained. The area can also contain files which have been uploaded by a workspace administrator.  
  
**User area**: An online area exclusively dedicated to the uploading of files by a single user. Each user has their own user area by default.  
  
The macro enabling file upload does not require the page to refresh in order to upload additional files; instead it posts the form to a hidden iFrame for processing. At present, we're giving users the choice to upload their file to either their workspace or their user area. I am probably going to remove the ability to upload a file to a user area for sake of simplicity (although the code will still exist and can be used if needed).  
  
I am yet to decide what convention I will use when assigning a user area directory to OpenID users. The following structure is not an option:  
wiki.osomsosft.com/uploads/users/http://simonmcmanus.com  
  
I would be interested to hear any suggestions/examples.  
  
I have currently not implemented any security with ccTiddly.  I am currently thinking that we will only allow people to upload files if they are the owner of the workspace; at the back end users will be able to upload files to their user space provided they are logged in.  
  
Here are the screenshots showing the work so far..... feedback is welcomed.  
  
![](http://farm3.static.flickr.com/2042/2347575468_de9c5a584e.jpg?v=0)  
![](http://farm3.static.flickr.com/2130/2346744603_3a3697567b.jpg?v=0)  
  
You can either leave your comments against this blog post or leave them on the google groups page :  
  
[http://groups.google.com/group/ccTiddly](http://groups.google.com/group/ccTiddly)  
  
We are also going to need an area where people can browse and manage their uploaded files. That will probably take the form of a separate macro (ccBrowse??) but I would be interested to hear from anyone who sees value in displaying the previously uploaded files underneath the upload functionality as the below sketch shows :  
  
![](http://farm3.static.flickr.com/2275/2346781123_dc056653bd.jpg?v=1206012805)  
  
Does this sound useful to anyone?  
  
When I have formalised the upload API, I will document it on the [ccTiddly](http://tiddlywiki.org/wiki/CcTiddly) page on [TiddlyWiki.org](http://tiddlywiki.org/). I hope to have this code released in the next week or two.

        