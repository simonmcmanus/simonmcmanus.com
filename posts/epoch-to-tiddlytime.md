---
date: 2007-12-03
title: Epoch to TiddlyTime
tags: ["osmososft","TiddlyWiki ccTiddly","post"]
---
This handy PHP function receives  a epoch time stamp and returns the a string using the TiddlyWiki date format.   Quite handy.  
  
//  Returns time in TiddlyWiki format from Epoch time stamp.  
function epochToTiddlyTime($timestamp)  
{  
return date('YmdHi', $timestamp);  
}

        