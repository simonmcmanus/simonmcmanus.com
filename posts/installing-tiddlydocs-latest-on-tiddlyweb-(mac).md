---
date: 2009-09-21
title: Installing TiddlyDocs latest on TiddlyWeb (Mac)
tags: ["osmososft","post"]
---
Assuming you have already installed TiddlyWeb and TiddlyWebWiki (http://tiddlyweb.peermore.com/wiki/) this is how to install the very latest development version of TiddlyDocs on your local machine :  

 
```
curl http://svn.tiddlywiki.org/Trunk/contributors/SimonMcManus/tiddlyweb/tiddlydocs/install.sh >install.sh
sudo sh install.sh
cd tiddlydocs
twanager server 127.0.0.1 8080   

 ```
 In your browsers then goto :
   
http://127.0.0.1:8080/recipes/tiddlydocs/tiddlers.wiki

        