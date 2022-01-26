---
date: 2008-01-21
title: Google Images in TiddlyWiki...and maybe flickr?
tags: ["API","ctiddly","flickr","google ajax search","googleimages","mashup","Osmosoft","osmososft","SimonMcManus","tiddlywiki","post"]
---
After playing with the [server side search](http://simonmcmanus.com/2008/01/15/server-side-search-for-cctiddly/ "ccTiddly server side search") for [ccTiddly](http://www.tiddlywiki.org/wiki/CcTiddly "ccTiddly") and knowing there were some project on the horizon that wanted to integrate google search into tiddlywiki results I decided to add google search into [TiddlyWiki](http://tiddlywiki.com "tiddlywiki"). An example of which can be found [here.](http://wikidev.osmosoft.com/searchgoogle "google search tiddlywiki example")  
  
As an extension to that I decided to add a google images search.  
  
I have uploaded an example to [Tiddlyspot](http://tiddlyspot.com/ "tiddlyspot") at:  
  
[http://imgsearch.tiddlyspot.com/](http://imgsearch.tiddlyspot.com/ "Google Images search Tiddlywiki Example")  
  
**The tiddlers which make it all work  are:**  
  
[http://imgsearch.tiddlyspot.com/#googleImage](http://imgsearch.tiddlyspot.com/#googleImage "googleImage tiddler")  
  
_Overrides search onKeyPress function so that tw searches google when the users presses enter._  
  
[http://imgsearch.tiddlyspot.com/#MarkupPostHead](http://imgsearch.tiddlyspot.com/#MarkupPostHead "MarkupPostHead")  
  
_Includes the google javascript file, you will need to change the API key (at the end of the URI) if using on a domain other than Tiddlyspot_.  
  
[http://imgsearch.tiddlyspot.com/#imageView](http://imgsearch.tiddlyspot.com/#imageView "ImageView Tiddler")  
  
_Code that creates the drop down list of images._  
  
[http://imgsearch.tiddlyspot.com/#taggedTemplateTweak](http://imgsearch.tiddlyspot.com/#taggedTemplateTweak "taggedTemplateTweak tiddler")  
  
_Allows tiddlers tagged "image" to use a different template._  
  
[http://imgsearch.tiddlyspot.com/#EditTemplate](http://imgsearch.tiddlyspot.com/#EditTemplate "EditTemplate tiddler")  
  
_Adds images link to the EditTemplate. Im sure there is a better way of doing this._  
  
[http://imgsearch.tiddlyspot.com/#ImageViewTemplate](http://imgsearch.tiddlyspot.com/#ImageViewTemplate "ImageViewTemplate tiddler")  
  
_It all works by storing the URI to the thumbnail in the tiddler title. With this template we hide the title._  
  
and **[Flickr](http://www.flickr.com/ "flickr")?**  
  
I started playing with the [flickr API](http://www.flickr.com/services/api/ "flickr api"), its returning the results in [JSON](http://en.wikipedia.org/wiki/JSON "JSON") but I have not had time to integrate that into the above script.  
  
If you look at the [flickr tiddler](http://wikidev.osmosoft.com/flickr#flickr "flckr tiddlers") its currently searching for "simonmcmanus"  
  
[http://wikidev.osmosoft.com/flickr](http://wikidev.osmosoft.com/flickr "http://wikidev.osmosoft.com/flickr")  
  
Given that im now on holiday its not going to get done for quite a while. If anyone wants to make a tiddlywiki flickr plugin the pieces are all in place.  
  
Comments and suggestions welcome as usual but pls be aware that I may not respond for a good few weeks. :)

        