---
date: 2007-09-13
title: Those Fuckers at Facebook
tags: null
---
So last week i attended BarCamp and wrote the BT Mojo application, which lets people have a box on their facebook profile page from which people can send them text messages.  
  
![Facebook Screen shot](https://simonmcmanus.files.wordpress.com/2007/09/picture-2.png)  
It does a very simple job, but there was plenty of potential to expand. So yesterday I was asked to present about the work I have been doing over the last few weeks. Clearly I wanted to show my MojoMob application. When I attempted to send myself a text (sad i know) i got the following error message. I knew for a fact that none of the code had been changed since I had last tested and also confirmed the remote file it was calling was present.  
  
![Error1](https://simonmcmanus.files.wordpress.com/2007/09/picture-3.png)  
  
The Page at http://www.facebook.com says:  
  
An error occured during a request to a remote server .This failure may be temporary, try repeating the request  
  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
  
The app uses the [mock ajax](http://simonmcmanus.wordpress.com/2007/08/01/mock-ajax-in-facebook/ "mock ajax") facebook calls which allow you to do ajax type stuff within Facebook. A look around the developer forum shows that I am clearly the not the only person experiencing this issue:  
  
http://www.facebook.com/topic.php?uid=2205007948&topic=12479  
  
The plot actually thickens when you read some of the posts. The beta facebook site does not appear to have the issue:  
  
http://www.beta.facebook.com/home.php?  
  
Which adds to the confusion? Surely facebook is not changing their code on the production server? Quite worrying if they are.  
  
More worrying is the  fact that the api was changed with apparently no notice and we are yet to see any comments from facebook 12 hours in.   Those fuckers, lets hope its sorted soon.  
  
I talk more about some of the issues with using the Facebook platform in [this post](http://simonmcmanus.wordpress.com/2007/08/08/is-facebook-the-answer-to-everything-facebook-for-the-enterprise/ "this post. ")

        