---
date: 2007-12-10
title: ccTiddly System Tiddler Plugins
tags: ["ccTiddly","Osmosoft","osmososft","plans","tiddlywiki","post"]
---
ccTiddly currently uses a modified version of the basic TiddlyWiki HTML code. This means that whenever there's an update to the core code, we have to manually update ccTiddly to the new version (which involves some fiddly manual steps).  
  
The goal is to make it so that ccTiddly uses a clean, unadorned copy of empty.html from tiddlywiki.com, and to have it automatically splice in the extra bits and pieces that are needed by ccTiddly.  
  
These extra bits and pieces are a bunch of plugins and some "stock" tiddlers that use macros from those plugins to expose them to the user.  
  
If, like me, you get confused about the difference between a plugin and a macro, remember that a plugin is just a tiddler tagged "systemConfig", a plugin can  can contain many different macros (which use config.macros)  
  
For instance, there is a plugin called "CreateWorkspacePlugin" that provides the <<ccCreateWorkspace>> macro. The macro produces a user interface that allows users to interactively create a new workspace. So, we need to include the plugin in the HTML file, and we also need to, say, add a new tiddler called "CreateWorkspace" that contains a call to <<ccCreateWorkspace>> the create workspace macro.  
  
Here's the complete list:  
**Macro <<ccCreateWorkspace>> (from CreateWorkspacePlugin)**  
  
This macro allows the user to create a new ccTiddly workspace by specifying a name, and the permissions for both anonymous and registered users. We'll make the macro available to users via the backstage area, since this isn't a particularly common operation.  
  
**Macro <<ccEditWorkspace>> (from EditWorkspacePlugin)  
**  
  
This plug in will allow users to manage permissions on a workspace which already exists (assuming they have the correct permission). Going forward this will probably include the master workspace management which will then be moved to its own plug in.  
  
**Macro <<ccUserTiddler>> (From UserTiddlerPlugin) **  
  
This tiddler will be used to change your email address, password and user specific tiddlers.  
  
**Macro <<ccLogin>> - (From LoginPlugin)**  
  
This macro displays the login UI.  When not logged in it will allow the users to login  using OpenID, LDAP or the internal user database. When logged in the user will be informed who they are logged in as and be given the option to log out.

        