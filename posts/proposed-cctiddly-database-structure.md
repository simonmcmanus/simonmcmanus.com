---
date: 2007-11-02
title: Proposed ccTiddly Database Structure
tags: null
---
Over the past few week I have been working with cool cold, Martin and [Jeremy](http://jermolene.wordpress.com/2=J11qqnKPIVNXkJ6uFLCadA) to decide where we want to take ccTiddly going forward. The idea is to make ccTiddly completely self service without removing any functionality. In order to do this we need to store what is currently stored in the /config/default.php file and store it in a single database.  
  
This is the currently the proposed design. Any comments and suggestions are welcome. I will be publishing more about road map for this project very soon. [![erm_summary.jpg](https://simonmcmanus.files.wordpress.com/2007/11/erm_summary.jpg)](https://simonmcmanus.files.wordpress.com/2007/11/erm_summary.jpg "erm_summary.jpg")  
  
[![erm1.jpg](https://simonmcmanus.files.wordpress.com/2007/11/erm1.jpg)](https://simonmcmanus.files.wordpress.com/2007/11/erm1.jpg "erm1.jpg")  
  
```js

```
  
  
\--  
  
Note : I have included the original ccTiddly tables in the below SQL.  They will be removed but are in place so that we can test as we build  
  
\[sourcecode language='sql'\]  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`admin\_of\_instance\`  
\--  
  
CREATE TABLE \`admin\_of\_instance\` (  
\`user\_username\` varchar(50) NOT NULL,  
\`instance\_name\` varchar(100) NOT NULL  
) ENGINE=MyISAM DEFAULT CHARSET=latin1;  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`group\_membership\`  
\--  
  
CREATE TABLE \`group\_membership\` (  
\`user\_username\` varchar(50) NOT NULL,  
\`groupname\` varchar(50) NOT NULL  
) ENGINE=MyISAM DEFAULT CHARSET=latin1;  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`instance\`  
\--  
  
CREATE TABLE \`instance\` (  
\`name\` varchar(100) NOT NULL,  
\`lang\` varchar(10) NOT NULL,  
\`keep\_revision\` int(1) NOT NULL,  
\`require\_login\` int(1) NOT NULL,  
\`cookie\_expire\` int(1) NOT NULL,  
\`tag\_tiddler\_with\_modifier\` int(1) NOT NULL,  
\`char\_set\` varchar(10) NOT NULL,  
\`hashseed\` varchar(50) NOT NULL,  
\`debug\` int(1) NOT NULL,  
\`status\` varchar(10) NOT NULL,  
PRIMARY KEY (\`name\`)  
) ENGINE=MyISAM DEFAULT CHARSET=latin1;  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`privileges\`  
\--  
  
CREATE TABLE \`privileges\` (  
\`id\` int(11) NOT NULL auto\_increment,  
\`read\` int(1) NOT NULL,  
\`insert\` int(1) NOT NULL,  
\`edit\` int(1) NOT NULL,  
\`delete\` int(1) NOT NULL,  
\`group\_membership\_groupname\` varchar(50) NOT NULL,  
PRIMARY KEY (\`id\`)  
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO\_INCREMENT=1 ;  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`tiddler\`  
\--  
  
CREATE TABLE \`tiddler\` (  
\`id\` int(11) NOT NULL auto\_increment,  
\`instance\_name\` varchar(100) NOT NULL,  
\`title\` text NOT NULL,  
\`body\` mediumtext NOT NULL,  
\`fields\` text NOT NULL,  
\`tags\` text NOT NULL,  
\`modifier\` varchar(50) NOT NULL,  
\`creator\` varchar(50) NOT NULL,  
\`modified\` varchar(12) NOT NULL,  
\`created\` varchar(12) NOT NULL,  
\`version\` int(11) NOT NULL,  
\`epoch\_modified\` int(15) NOT NULL,  
\`epoch\_created\` int(15) NOT NULL,  
PRIMARY KEY (\`id\`)  
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO\_INCREMENT=1 ;  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`tiddler\_revision\`  
\--  
  
CREATE TABLE \`tiddler\_revision\` (  
\`id\` int(11) NOT NULL auto\_increment,  
\`title\` text NOT NULL,  
\`body\` text NOT NULL,  
\`fields\` text NOT NULL,  
\`modified\` varchar(12) NOT NULL,  
\`modifier\` varchar(50) NOT NULL,  
\`revision\` int(11) NOT NULL,  
\`tags\` text NOT NULL,  
\`tiddler\_id\` int(11) NOT NULL,  
\`epoch\_modified\` int(15) NOT NULL,  
PRIMARY KEY (\`id\`)  
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO\_INCREMENT=1 ;  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`tiddly\_wiki\_entry\`  
\--  
  
CREATE TABLE \`tiddly\_wiki\_entry\` (  
\`id\` int(11) NOT NULL auto\_increment,  
\`title\` varchar(255) NOT NULL default '',  
\`body\` text NOT NULL,  
\`fields\` text NOT NULL,  
\`modified\` varchar(128) NOT NULL default '',  
\`created\` varchar(128) NOT NULL default '',  
\`modifier\` varchar(255) NOT NULL default '',  
\`creator\` varchar(255) NOT NULL default '',  
\`version\` int(11) NOT NULL default '0',  
\`tags\` varchar(255) NOT NULL default '',  
PRIMARY KEY (\`id\`)  
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO\_INCREMENT=2 ;  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`tiddly\_wiki\_entry\_version\`  
\--  
  
CREATE TABLE \`tiddly\_wiki\_entry\_version\` (  
\`id\` int(11) NOT NULL auto\_increment,  
\`title\` varchar(255) NOT NULL default '',  
\`body\` text NOT NULL,  
\`fields\` text NOT NULL,  
\`modified\` varchar(128) NOT NULL default '',  
\`modifier\` varchar(255) NOT NULL default '',  
\`version\` int(11) NOT NULL default '0',  
\`tags\` varchar(255) NOT NULL default '',  
\`oid\` int(11) NOT NULL,  
PRIMARY KEY (\`id\`)  
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO\_INCREMENT=3 ;  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`user\`  
\--  
  
CREATE TABLE \`user\` (  
\`username\` varchar(50) NOT NULL,  
\`password\` varchar(50) NOT NULL,  
\`empoyee\_id\` varchar(200) NOT NULL,  
PRIMARY KEY (\`username\`)  
) ENGINE=MyISAM DEFAULT CHARSET=latin1;  
```js

```
  
  
\[/sourcecode\]

        