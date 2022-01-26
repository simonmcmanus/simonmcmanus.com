---
date: 2007-09-14
title: Server Side TiddlyWikis
tags: ["CCTiddlyWiki","Osmosoft","PHPTiddlyWiki","ServerSide TiddlyWiki","tiddlywiki","post"]
---
This post is a work in progress trying to summarize the different server side tiddlywikis.  
  
the existence of a database is not being seen as an advantage or disadvantage at this point. This is a work in progress but if you see any glaring omissions then please comment or send me a mail. Thanks.  
  
[**TiddlyHome**](http://tiddlyhome.bidix.info/ "TiddlyHome")  
  
The main fetaures are :  

  
*   BSD open source license
  
*   written in PHP, no database
  
*   Based on UploadPlugin
  
*   All User management in .htpasswd
  
*   All control access in .htaccess
  
*   All admin tasks from a dedicated TiddlyWiki
  
*   User Options and Site Options accessible from TiddlyWiki
  
*   and much more ...
  

  
The next step will be :  

  
*   GroupAuthoring support
  

  
**database back end** : no  
  
**multi user** : functionality already present - UI could be improved.  
  
**multi instance** :functionality already present - UI could be improved.  
  
**Tiddlywiki Upgrade** : ? currently using TW 2.2.5  
  
**Strengths** : Makes good use of native apache functionality  
  
**Weaknesses** : The UI requires work. Still in the Beta stages.  
  
  
  
[**PHPTiddlyWiki**](http://patrickcurry.com/tiddly/ "PHPTiddlyWiki")  
  
**database back end** : yes  
  
**multi user** : yes  
  
**multi instance** : would require work store the tiddlers in relation to a TiddlyWiki instance.  
  
**Tiddlywiki Upgrade** :Javascript code is stored in two php files. tiddly1 and tiddly2.  
  
**Strengths** :simple install and config.  
  
**Weaknesses** : No login, code not being maintained.  
  
[**Mini Tiddly Server**](http://www.minitiddlyserver.com/ "Mini Tiddly Server")  
  
**New Features**  

  
*   compatible with TW2.2 and older.  
    
      
    *   autodetect TW core and save accordingly
      
    
      
    
  
*   unicode fix, solves issues with international characters.
  
*   improved error handling and recovery.
  
*   various bug fixes to the saving routine.
  
*   improved download link. Just click it!
  
*   [TiddlySnip](http://tiddlysnip.com/ "//tiddlysnip.com") support.
  

  
**database back end :** no  
  
**multi user :** no  
  
**Tiddlywiki Upgrade:** store in a single file on the server.  
  
**Strengths :** password authentication present  
  
**Weaknesses: ** install process has some issues.   
  
  
  
[**ccTiddlyWiki**](http://cctiddly.sourceforge.net/ "ccTiddlyWiki")  
  
**database back end** : yes  
  
**multi user** : yes - there can be many users for the same workspace.  
  
**multi instance** : would require work store the tiddlers in relation to a TiddlyWiki instance.  
  
**Tiddlywiki Upgrade** : js code stored on the server.  
  
**Strengths** : password authentication already present but the may not be relevant as SiteMinder will be used for login.  
  
**Weaknesses** : code not being maintained. Possible problem with login variables being stored in server variables, could be a problem with multiple instances running on the same server.

        