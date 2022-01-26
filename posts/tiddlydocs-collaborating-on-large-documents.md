---
date: 2009-02-06
title: TiddlyDocs - Collaborating on large documents
tags: ["collaboration","demo","FCKEditor","jquery","osmososft","PDF","tiddlywiki","XSL-FO","post"]
---
Recently I've been building a proof of concept, the brief was simple...  
  
"Come up with a way for my team to collaborate with people outside the organisation on large Word document. At the moment, we tend to email them between us, which can degenerate into a nightmare."  
  
Our approach was to think about breaking these large documents down into small sections which could be assigned to individuals for authoring and/or review. These sections could then be reassembled into a single document for printing.  
  
To build this proof of concept we used [TiddlyWiki](http://tiddlywiki.com) and [jQuery](http://jquery.com/). The latest release of TiddlyWiki (2.5) includes jQuery (1.2.6) so this provided a fine opportunity to explore the new potential.  
  
So [here is the demo](http://wiki.osmosoft.com/TiddlyDocs/),  
  
The online demo does not demonstrate the iGoogle integration of TiddlyDocs.   The iGoogle integration showed how we could provide a personalised view of the sections assigned to each user.  While we used iGoogle for the original demo this portlet just contains HTML so could be embedded into any portal framework which supports HTML.  
  
[PSD](http://blog.whatfettle.com/) wrote some [XSL-FO](http://www.w3schools.com/xslfo/xslfo_intro.asp) to translate the generated HTML into a printable PDF document. Paul's code can be found [here](http://svn.tiddlywiki.org/Trunk/contributors/PaulDowney/server/html2pdf/).  

**Features :**
==============

  
**Drag and Drop your Table of Content**  
  
![](http://farm4.static.flickr.com/3318/3253469780_55cedf9eea.jpg "TiddlyDocs - drag n drop ")  
  
Allows users to change the order and hierarchy of the document table of content  
  
**Easily assign sections to Users**  
  
![](http://farm4.static.flickr.com/3391/3252648993_18d90588aa.jpg "TiddlyDoc - Assign chunk")  
  
Allows each section to be easily assigned to a pre-populated list of users.  
  
**Full WYSIWYG text editing with FCKEditor**  
  
![](http://farm4.static.flickr.com/3503/3253482874_bc934ce199.jpg "TiddlyDocs")  
  
Allows users to edit the document content in a familiar word style environment.  Also allows content including images to be pasted in the textarea from the clipboard.  
  
**iGoogle Integration of Personalised Task Lists**  
  
![](http://img.skitch.com/20090205-k7u7rpctmxsbmstudwr3mphiug.jpg "TiddlyDoc")  
  
The iGoogle integration allows each users to have their own view of all the tasks assigned to them. This can be used in various portal frameworks.  
  
**Easy view of the documents status**  
  
![](http://farm4.static.flickr.com/3316/3253512996_30f9a0787c.jpg?v=0 "TiddlyDoc - Status")  
  
The bar to the right of the table of content shows the status of each section. When the bar is completely green the document is complete.  This example demonstrates that only one of the sections has been completed.  
  
**Each Section Allows for Comments  
**  
  
![](http://farm4.static.flickr.com/3302/3253503268_0b5bd3e38e.jpg "TiddlyDoc")  
  
Each section allows multi-threaded comments which will not be printed in the final document.  This allows for conversations to take place around each section of content.  
  
**The Components :**  
  
We were able to build this proof of concept so quickly by reusing open source code that is available in the TiddlyWiki and jQuery communities.  Below I talk about the components that make up TiddlyDocs.  
  
**SplitView Plugin  
**  
  
This is one of the plugins I wrote specifically for the demo. The macro accepts one parameter which is the name of another tiddler to store the document specification. The document specification is stored in list format, eg:  
  
_\* Heading 1__  
\* Heading 2  
__\*\* Heading 2.1  
\*\* Heading 2.2__  
\* Heading 3_  
  
Every time the document is re-arranged the specification tiddler is saved.  
  
**PrintView Plugin**  
  
This is the other plugin which I wrote specifically for the demo.  This plugin can read the document specification, collect the data from each of the required tiddlers, and then generate a static html file on the server which can then be converted to PDF for printing.  
  
**Single Page Mode Plugin**  
  
Provided by Eric of [TiddlyTools,](http://tiddlytools.com) the singlePageModePlugin ensures only one tiddler is viewed at a time.  
  
[http://tiddlytools.com/#SinglePageModePlugin](http://tiddlytools.com/#SinglePageModePlugin)  
  
**Comments Plugin**  
  
Allows users to post comments against individual sections. These comments are presented as a threaded discussion, allowing rich conversations to take place around the content.  Thanks to [Michael Mahemoff](http://softwareas.com/) for this plugin who also helped with the demo.[  
](http://softwareas.com/)  
  
[http://tiddlyguv.com/CommentsPlugin.html](http://tiddlyguv.com/CommentsPlugin.html)  
  
**Value Switcher Plugin TeamTasks**  
  
Taken from [Phil Hawksworth](http://hawksworx.com/)'s TeamTasks, this allows the fields provided by TiddlyWiki to be used to store information about ownership and current status.  
  
[http://svn.tiddlywiki.org/Trunk/contributors/PhilHawksworth/verticals/TeamTasks/core/plugins/ValueSwitcherPlugin.js](http://svn.tiddlywiki.org/Trunk/contributors/PhilHawksworth/verticals/TeamTasks/core/plugins/ValueSwitcherPlugin.js)  
  
from:  [http://getteamtasks.com](http://getteamtasks.com)  
  
**FCKEditor  
**  
[FCKEditor](http://www.fckeditor.net/) is a project to make a nice WYSIWYG editor from any HTML textarea.  I have to say a I have been very impressed with FCKEditor.  
  
[http://www.fckeditor.net/](http://www.fckeditor.net/)  
  
**TiddlyWiki FCKEditor Plugin**  
  
A TiddlyWiki plugin that makes FCKEditor work nicely with TiddlyWiki.  
  
[http://visualtw.ouvaton.org/VisualTW.html#FCKeditorPlugin](http://visualtw.ouvaton.org/VisualTW.html#FCKeditorPlugin)  
  
**NestedSortable -(a  jQuery plugin)**  
This jQuery plugin provides the drag and drop interface for the demo.  
  
[http://code.google.com/p/nestedsortables/](http://code.google.com/p/nestedsortables/)  
  
This demo is hosted by [ccTiddly](http://www.tiddlywiki.org/wiki/CcTiddly) but its been written to work on [TiddlyWeb](http://www.tiddlywiki.org/wiki/TiddlyWeb) and any other server-side implementation of TiddlyWiki.  Over the next few months I will be working on TiddlyDocs to prepare it for easy consumption.  
  
Updated : [Michael Mahemoff](http://softwareas.com/) has produced a screencast talking through the features of this demo :  [http://vimeo.com/3109248](http://vimeo.com/3109248)

        