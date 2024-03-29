---
date: 2007-11-26
title: ccTiddly 2.x - An Overview
tags: ["ccTiddly","Osmosoft","ServerSide TiddlyWiki","SimonMcManus","tiddlywiki","post"]
---
## Why are we doing this?  
We've now got a couple of user groups within BT using ccTiddly. Their feedback is driving a wave of improvements that I'm working on with CoolCold, the man who originally created ccTiddly. The areas we've been looking at are:  
  
## Self-service Workspace Creation  
The new version of ccTiddly will allows users to create their own ccTiddly workspaces, which is a (more or less) a complete independent wiki with it's own security permissions.  
  
## Reusable Master Workspaces  
ccTiddly 2.x introduces the concept of master workspaces.  A "master workspace" allows a set of tiddlers to be packaged up and included in several different workspaces. This allows common content such as themes to be shared between workspaces. Because the links are dynamic, it is also possible to change a tiddler from a master workspace and have the change automatically appear in workspaces that use that master.  
  
## User Management  
The new version of ccTiddly will have new user management and security that allows permissions to be set on a per-workspace basis for individual users and groups.  Although we're currently working with a custom user database, I've got experimental support for both LDAP and OpenID.  
  
## Image and Attachment Support  
Users will be able to upload images and other attachments to a workspace .  
  
## Import Support  
Users will also be able to upload a standalone TiddlyWiki file so that it can be imported into a ccTiddly workspace.  
  
## Personal Tiddlers  
Users will be able to create custom personal tiddlers which will persist across all workspaces they access on a server, allowing advanced users to be able to have settings applied consistently across all their workspaces  
  
Over the coming few weeks I will be making the above happen and providing you details about each of these sections on my blog.

        