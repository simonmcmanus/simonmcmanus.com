---
date: 2007-09-25
title: Giving TiddlyWiki a rest......MYSQL to REST in PHP.
tags: ["BT","Osmosoft","rest","SimonMcManus","tiddlywiki","post"]
---
As part of my server side TiddlyWiki work we are looking at building a REST interface where TiddlyWikis can store their tiddlers.   I was doing some research into ways of providing a REST interface to MySQL datbases.  
  
I found this great bit of code:  
  
http://phprestsql.sourceforge.net/  
  
You simply point the project at a database on your server and it provides a REST interface into your MySQL database.   In order to get the code working you simply need to copy the folder into your working directory and change the phprestsql.ini file to reflect your settings.  
  
One problem that I noticed was that the .htaccess files is lost when the file is zipped.  To get the app working you simple need to create a .htaccess file in your working directory and copy the text below :  
```js
RewriteEngine On
  
RewriteCond %{REQUEST\_FILENAME} !-d
  
RewriteCond %{REQUEST\_FILENAME} !-f
  
#RewriteRule ^.\*$ index.php
  
RewriteRule ^.\*$ /rest/index.php
```
  

  
In this case the working directory was /rest/

        