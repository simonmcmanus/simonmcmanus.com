---
date: 2014-02-19
title: Sublime 3 build system to run NPM Test
tags: ["node","post"]
---
In Sublime 3,  go to \`tools > build system > new build system\` and paste the below into the file:

> {  
> "working\_dir": "${project\_path:${folder:${file\_path}}}",  
> "cmd": \["npm", "test"\]  
> }

Now you will have a build system that will run the NPM test command in your current project directory.

        