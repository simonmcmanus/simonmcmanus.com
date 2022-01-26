---
date: 2007-09-15
title: Enable PHP error reporting for a page.
tags: null
---
This code is really handy although not that easy to find on google. It lets you enable errors on a php page without having to mess around in the php.ini file.  
error\_reporting("E\_ALL");  
ini\_set("display\_errors", "1");

        