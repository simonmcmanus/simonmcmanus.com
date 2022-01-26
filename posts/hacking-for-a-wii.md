---
date: 2007-09-24
title: Hacking for a Wii.
tags: ["BT","hack","hacking","Osmosoft","osmososft","tiddlywiki","wii","post"]
---
Last Monday Osmosoft purchased its first games console, the Wii. One of the conditions of the office having a Wii was that we needed to do something cool (and not just play games) by the Friday.  
  
What with TiddlyWiki's third year anniversary also being on the Friday it proved an interesting week.  
  
![a Wii](http://www.laternerdz.com/wp-content/uploads/2006/11/wii.jpg)  
  
So my first mission was to find some way of detecting movement from the Wii controllers, I have seen a number of demos showing the [wii controlling a Midi interfaces](http://mike.verdone.ca/wiitomidi/ "wii controlling midi interface") but my distinct lack of a midi interface proved a problem here.  
  
I managed to find a number of apps which let me control my mac from the Wii controller [here](http://wiibrew.org/index.php?title=List_of_Wii_Applications "control aps from your wii controller"). Eventually I found a site which provides example javascript code demonstrating how to read the Wii controller coordinates as variables!  
  
[Javascript Wii Controller Code](//hullbreachonline.com/wii/sdk.html "javscript wii controller code")  
  
Unfortunately you cannot detect false feedback on the controllers but we can we could access X, ,Y Distance and rotation co-ordinates from the controller when being viewed through Opera on the Wii (the code does not work when hooked up to the PC)  
  
So at this point I had the idea to turn the code powering the wall demo into a navigation tool for [TidllyWiki.](http://tiddlywiki.com/ "TiddlyWiki")  
  
We uesd[](http://tw.lewcid.org/ "Ful screen tw") [Saqs](http://tw.lewcid.org/) full screen TiddlyWiki plugin as the basis, when we had built the code to detect the left and right motion we then combined it with Saqs plugin (he was visiting the office for the TW anniversary which made he particularly accessible)  
  
The end result can be loaded onto a Wii from the URL below:  
  
http://osmosoft.servehttp.com/wii/a.htm  
  
and you can watch video of the result on [youtube.](http://www.youtube.com/watch?v=8AX_uEzVVnU)  
  
\[youtube=http://www.youtube.com/watch?v=8AX\_uEzVVnU\]

        