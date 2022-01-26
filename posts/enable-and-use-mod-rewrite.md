---
date: 2007-10-22
title: Enable and use Mod-Rewrite
tags: ["apache","BT","mod-rewrite","Osmosoft","SimonMcManus","post"]
---
Mod rewrite is a great way to manipulate URLs. In this post I hope to explain how to get Mod-rewrite set up and working:  
  
Firstly we need to make sure that apache has been set up correctly, this requires us to check our httpd.conf file :  
This line:  
```js
LoadModule rewrite\_module modules/mod\_rewrite.so
```
  
should be uncommented (the starting hash removed)  
  
Some apache configurations also require you to uncomment :  
```js
 AddModule mod\_rewrite.c
```
  
You will also need to allow .htaccess files to change your apache config. You can do this by ensuring that the AllowOverride option is set to all :  
```js
    #
  
    # AllowOverride controls what directives may be placed in .htaccess files.
  
    # It can be "All", "None", or any combination of the keywords:
  
    #   Options FileInfo AuthConfig Limit
  
    #
  
    AllowOverride All
```
  
We then just need to restart apache for our settings to take effect. When apache has restarted we can get started. We do mod-rewrite stuff in .htaccess files. I reccomend creating your .htaccess file in some kind of FTP client as both the Mac Finder and Windows Explorer dont like to create files starting with a dot. (they are reserved for system/hidden files)  
  
When you have created the .htaccess file you simple need to add the below code :  
```js
RewriteEngine On
  
RewriteCond %{REQUEST\_FILENAME} !-d
  
RewriteCond %{REQUEST\_FILENAME} !-f
  
RewriteRule ^.\* /shared/index.php
```
  
You should change the last line to reflect a file which actually exists.  

#### What have I done?

  
While it might seem complex what you have just done is incredibly simple, any request recieved by the folder containing your .htaccess file (and folders below it) will be directed to the .htaccess file.  
  
In this particular case our .htaccess file looks to see if the request exists as a file or directory, if it does not the request is passed on to /shared/index.php on the server. So if we put the .htaccess file in our root directory all the below URLs would actually point to the same file (/shared/index.php)  
  
osmosoft.com/wordpress  
  
osmosoft.com/typo  
  
osmosoft.com/BLAHNLASD  

#### Where do I go from here?

  
Now you need to change /shared/index.php to display different things based on the URL, the simplist way I have found to do this is by breaking up the URL into variables and then proccessing them in index.php. eg:  
```js
<?php
```
  
```js
$url = split('/', $\_SERVER\['PHP\_SELF'\]);
  
  
$instance =  $url\[1\];
```
  
```js
?>
```

        