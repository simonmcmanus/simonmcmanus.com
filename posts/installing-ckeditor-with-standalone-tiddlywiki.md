---
date: 2010-06-28
title: Installing CKEditor with standalone TiddlyWiki
tags: ["CKEditor TiddlyWiki","osmososft","post"]
---
I was recently asked how to use [CKEditor](http://ckeditor.com/) with a standalone [TiddlyWiki](http://tiddlywiki.com). [CKEditor](http://ckeditor.com/) is the replacement for FCKEditor. I've been using it for a while in MyDocs (a customisation of [TiddlyDocs](http://tiddlydocs.com)) but thought I would take this opportunity to document how it can be used in a standalone TiddlyWiki.  
  
First off we need to get all the tiddlers required for [CKEditor](ckeditor.com), the easiest way to do that is to cook the [ckeditor vertical recipe](http://svn.tiddlywiki.org/Trunk/verticals/ckeditor/index.html.recipe).  
  
For your convenience I've uploaded the [TiddlyWiki](tiddlywiki.com) file it produces [here](http://simonmcmanus.com/stuff/ckeditor/index.html).  
  
Now we need to download the [CKEditor](ckeditor.com) files, You can download them [here](http://download.cksource.com/CKEditor/CKEditor/CKEditor%203.3.1/ckeditor_3.3.1.zip).  
  
Finally you just need to change the location set in the [MarkupPreHead](http://simonmcmanus.com/stuff/ckeditor/index.html#MarkupPreHead) tiddler so it points to the CKEditor folder you just downloaded. In my case:  
  
<script type="text/javascript" src="**./ckeditor/ckeditor.js**"></script>  
  
If you are using cook you will need to save the MarkupPreHead tiddler from within the TiddlyWiki file for it to be set correctly. I have already done so in the example provided.  
  
You may also want to change the values in the "CKEditorSettings" tiddler.  
  
Save your changes, refresh the browser and that should do it.  
  
**Update:**  
  
As some folks experienced problems getting this setup I have provided a zip file of the output:  
[  
http://simonmcmanus.com/stuff/ckeditor/twCKEditor.zip](http://simonmcmanus.com/stuff/ckeditor/twCKEditor.zip)

        