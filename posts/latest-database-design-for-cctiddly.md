---
date: 2007-11-09
title: Latest Database design for ccTiddly
tags: ["BT","ccTiddly","database design","mysql","Osmosoft","phpmyadmin","SimonMcManus","post"]
---
[![erm2.jpg](https://simonmcmanus.files.wordpress.com/2007/11/erm2.jpg)](https://simonmcmanus.files.wordpress.com/2007/11/erm2.jpg "erm2.jpg")  
  
and the sql :  
\[sourcecode language='sql'\]  
\-- phpMyAdmin SQL Dump  
\-- version 2.10.1  
\-- http://www.phpmyadmin.net  
\--  
\-- Host: localhost  
\-- Generation Time: Nov 09, 2007 at 01:32 PM  
\-- Server version: 5.0.41  
\-- PHP Version: 5.2.2  
  
SET SQL\_MODE="NO\_AUTO\_VALUE\_ON\_ZERO";  
  
\--  
\-- Database: \`permissions\`  
\--  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`admin\_of\_instance\`  
\--  
  
CREATE TABLE \`admin\_of\_instance\` (  
\`user\_id\` varchar(255) NOT NULL,  
\`instance\_name\` varchar(100) NOT NULL  
) ENGINE=MyISAM DEFAULT CHARSET=latin1;  
  
\--  
\-- Dumping data for table \`admin\_of\_instance\`  
\--  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`group\`  
\--  
  
CREATE TABLE \`group\` (  
\`name\` varchar(50) NOT NULL,  
\`desc\` mediumtext NOT NULL  
) ENGINE=MyISAM DEFAULT CHARSET=latin1;  
  
\--  
\-- Dumping data for table \`group\`  
\--  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`group\_membership\`  
\--  
  
CREATE TABLE \`group\_membership\` (  
\`user\_id\` varchar(255) NOT NULL,  
\`group\_name\` varchar(50) NOT NULL  
) ENGINE=MyISAM DEFAULT CHARSET=latin1;  
  
\--  
\-- Dumping data for table \`group\_membership\`  
\--  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`instance\`  
\--  
  
CREATE TABLE \`instance\` (  
\`name\` varchar(100) NOT NULL,  
\`lang\` varchar(10) NOT NULL,  
\`keep\_revision\` int(1) NOT NULL,  
\`require\_login\` int(1) NOT NULL,  
\`session\_expire\` int(10) NOT NULL,  
\`tag\_tiddler\_with\_modifier\` int(1) NOT NULL,  
\`char\_set\` varchar(10) NOT NULL,  
\`hashseed\` varchar(50) NOT NULL,  
\`debug\` int(1) NOT NULL,  
\`status\` varchar(10) NOT NULL,  
\`tiddlywiki\_type\` varchar(30) NOT NULL,  
\`default\_anonymous\_perm\` varchar(4) NOT NULL,  
\`default\_user\_perm\` varchar(4) NOT NULL,  
\`rss\_group\` varchar(50) NOT NULL,  
\`markup\_group\` varchar(50) NOT NULL,  
PRIMARY KEY (\`name\`)  
) ENGINE=MyISAM DEFAULT CHARSET=latin1;  
  
\--  
\-- Dumping data for table \`instance\`  
\--  
  
INSERT INTO \`instance\` (\`name\`, \`lang\`, \`keep\_revision\`, \`require\_login\`, \`session\_expire\`, \`tag\_tiddler\_with\_modifier\`, \`char\_set\`, \`hashseed\`, \`debug\`, \`status\`, \`tiddlywiki\_type\`, \`default\_anonymous\_perm\`, \`default\_user\_perm\`, \`rss\_group\`, \`markup\_group\`) VALUES  
('permissions', 'en', 1, 0, 0, 0, 'utf8', '', 0, '', 'TiddlyWiki', '', '', '', '');  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`login\_session\`  
\--  
  
CREATE TABLE \`login\_session\` (  
\`user\_id\` varchar(255) NOT NULL,  
\`session\_token\` varchar(150) NOT NULL COMMENT 'username+password+time',  
\`expire\` int(20) NOT NULL,  
\`ip\` varchar(15) NOT NULL  
) ENGINE=MyISAM DEFAULT CHARSET=latin1;  
  
\--  
\-- Dumping data for table \`login\_session\`  
\--  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`permissions\`  
\--  
  
CREATE TABLE \`permissions\` (  
\`read\` int(1) NOT NULL,  
\`insert\` int(1) NOT NULL,  
\`edit\` int(1) NOT NULL,  
\`delete\` int(1) NOT NULL,  
\`group\_name\` varchar(50) NOT NULL,  
\`instance\_name\` varchar(100) NOT NULL  
) ENGINE=MyISAM DEFAULT CHARSET=latin1;  
  
\--  
\-- Dumping data for table \`permissions\`  
\--  
  
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
\`modifier\` varchar(255) NOT NULL,  
\`creator\` varchar(255) NOT NULL,  
\`modified\` varchar(12) NOT NULL,  
\`created\` varchar(12) NOT NULL,  
\`version\` int(11) NOT NULL,  
PRIMARY KEY (\`id\`)  
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO\_INCREMENT=1 ;  
  
\--  
\-- Dumping data for table \`tiddler\`  
\--  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`tiddler\_revision\`  
\--  
  
CREATE TABLE \`tiddler\_revision\` (  
\`id\` int(11) NOT NULL auto\_increment,  
\`title\` text NOT NULL,  
\`body\` mediumtext NOT NULL,  
\`fields\` text NOT NULL,  
\`modified\` varchar(12) NOT NULL,  
\`modifier\` varchar(255) NOT NULL,  
\`revision\` int(11) NOT NULL,  
\`tags\` text NOT NULL,  
\`tiddler\_id\` int(11) NOT NULL,  
PRIMARY KEY (\`id\`)  
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO\_INCREMENT=1 ;  
  
\--  
\-- Dumping data for table \`tiddler\_revision\`  
\--  
  
\-- --------------------------------------------------------  
  
\--  
\-- Table structure for table \`user\`  
\--  
  
CREATE TABLE \`user\` (  
\`id\` varchar(255) NOT NULL,  
\`password\` varchar(50) NOT NULL,  
\`short\_name\` varchar(50) NOT NULL,  
\`long\_name\` varchar(100) NOT NULL,  
PRIMARY KEY (\`id\`)  
) ENGINE=MyISAM DEFAULT CHARSET=latin1;  
  
\--  
\-- Dumping data for table \`user\`  
\--  
  
\[/sourcecode\]

        