---
date: 2007-08-08
title: Is Facebook the answer to everything? - Facebook for the Enterprise?
tags: ["API","Blog","BT","enterprise facebook","facebok","Facebook","Facebook API","Facebook Application","facebook in the enterprise","fbml","Mash Up","mypages","Osmosoft","PHP","SimonMcManus","social networking","web20","WordPress","post"]
---
I ask the question simply because it seems to come up as a potential solution to everything these days.  
  
While I have been making many technical posts about Facebook I have held back on opinions and insights while a massive debate seems to be raging around me.  
  
So why are people so excited about Facebook? [JP](http://confusedofcalcutta.com/ "JP") has made a number of Facebook related blog entries, I found two of his comments insightful.  
  
"It is rooted in physical relationship rather than just electronic. The interactions are therefore a lot richer."  
  
"And this phenomenon, of a physical community being extended and enriched by electronic ties, is something that is a lot closer to real life."  
  
These two quotes are quite fundamental to why Facebook is so successful, it is not the the apps or even the platform, but rather the brilliant way you can find, communicate and interact with past and current (real life) friends.  
  
Before I go any further three bits of history for you:  
  
1 .. I initially started investigating the Facebook API to build an application which lets Facebook users make phone calls and send texts using the [BT Web21C SDK.](http://web21C.bt.com "BT Web21C SDK")  
  
2 .. Before I started with BT Osmosoft I made MyPages which was an enterprise version of Facebook / MySpace inside the BT firewall.  
  
3 .. In MyPages users could create blogs, wikis, spreadsheets, file and photo shares. Employees could show their relation with other staff and each user had a recent activity news feed. I had big plans for group permissions and the news feeds.  
  
In a big enterprise there is always going to be thousands of relationships and interactions which are generally ignored by enterprise software. Clearly the ability to map and search these relationships has benefits. If I am unable to contact Phil, being able to browse and search his work contacts could be very helpful.  
  
So should these relationships be stored on an internal system such as MyPages? or maybe an out of the box Facebook behind your firewall? Or maybe just build a Facebook app? If you are asking yourself these questions you should think about the points below :  
  
**Security / Ownership**  
\- Lots of things like security and data protection to think about. You may want the system to tell you when your confidential documents have been read or updated. Clearly some legal and security issues to work through.  
  
**Integrations with other Systems**  
  
\- One of the most useful concepts in Facebook that the enterprise can really take advantage of is the news feed. I talk about this more later but the ability to show useful updates in a configurable news feeds could really help reduce email traffic and improve workflow.  
  
**Control of Data**  
  
\- How much control do you want over the data?  
  
**Search**  
\- Something like MyPages has real value when you can search the intranet for a topic and find someone in the company who has been blogging about it. Especially when you can then explore their network of contacts. This is would be very tricky to implement securely on facebook.com  
  
**Self Promotion**  
\- MyPages provided each member of staff with their own home page, they were encouraged to use this as an online CV to explain what they had done, were doing and wished to do in the future. [Jeremy Ruston](http://jermolene.wordpress.com/ "Jeremy Ruston") (my boss) often asks the question, what intranet content should we not share externaly, and why not? This is a interesting point, and particularly in relation to this issue.  
  
My mind runs away with ideas of allowing customers to pick a team based on public profile pages with reviews from previous client. This of course takes opening up the enterprise to a whole new level and you would need to ensure at least two things : 1 : Does your company have good quality staff / teams and the resource to provide good customer service?. 2 : Can your company hold onto its best staff even with their success being public knowledge?  
  
**Functionality**  
\- if we are talking about a Facebook box then we would see some new enterprisish apps but I suspect their functionality would still be restricted by the Facebook API.  
  
**Enforced Sign Up**  
\- Can you imagine being told you have to sign up to Facebook at work? its an extreme but I suspect that people would have dramatically different relationships with Facebook.  
  
**Fewer Distraction?**  
\-I'm not going to go as far as to say that I waste my time on Facebook but it has been known to distract me from work in the past, regular Facebook users may not notice work related news feed items between all the "noise" generated by their non-work related updates.  
  
There are also some other considerations when building a business app for Facebook:  
  
I don't want to step into the open vs closed debate but lets be honest, Facebooks API is restrictive and I suspect that the desire to maintain consistency and control has reduced peoples ability innovate. A browse through the Facebook application directory really doesn't return a wide array of useful apps, mostly annoying games. I would love to integrate my dhtml phone into Facebook but as all javascript is removed Iwould have to hack my way round, leaving my app liable to be broken as soon as facebook figure out what im doing. I know the guys at Facebook have just recently provided some javascript access but I have not tested it yet.  
  
this is another big point, can you really have an app thats going to become business critical reliant on systems over which you have no control or contracted support? APIs can be changed with little or in some cases no notice.  
  
Each Facebook application is limited in the number of posting it can make to a user's news feed on a given day (currently 10 I believe), to me this is yet another problem, I still need to see my 11th news feed item of the day. If a system was being heavily used I would expect up to 20-30 per day, this would of course be configurable:  
  
update my news feed when I receive an email.  
update my news feed on the activity of these people:  
Update my news feed on activity to do with these project:  
update my news feed when these document (collaborative wikis and blogs) are changed  
update my news feed when something is tagged \_\_\_\_\_\_\_\_  
update my news feed when someone searches for \_\_\_\_\_\_\_\_\_\_  
don't update my news feed when....  
This brings me to a fascinating search engine optimization (SEO) type article: [Inside Facebook, NFO (News Feed Optimization) is the new SEO](http://www.insidefacebook.com/2007/07/16/inside-facebook-nfo-is-the-new-seo/ "http://www.insidefacebook.com/2007/07/16/inside-facebook-nfo-is-the-new-seo/")  
  
Do you really want to be in a situation where the business has to pay for your items to appear at the top of peoples news feed?  
  
So one possible answer to this is for Facebook build an enterprise/professional tab, allowing people to differentiate between their work and personal lives while still showing the inevitable connections. It would also need to include more useful business related applications such as blogs, wikis and file stores. This could create a whole new market for enterprise Facebook apps.  
  
Since playing around with the API my relationship has changed with Facebook, my initial reaction after logging is now to goto my profile page to test my application, My news feed is very much a constantly changing blur and I am rarely able to keep up. I'm not sure if it is the 'noise' or maybe seeing some of the problems with the API has taken away the sleek near perfect view I had of Facebook when I was just a user. The reason I raise the slightly obscure point is because I think it will be interesting to see how people would relate to Facebook should it be required of them at work.  
  
So I have probably asked a lot more questions that I have answered in the above post so I should attempt to conclude in some way shape or form. So, Facebook while it deserves all the attention its gets it is just another internet craze. While its closed source its only the people at Facebook who can really provide the functionality we require. In a lot of cases I suspect they won't. As with any craze it will pass, people will find a new killer web app and we will be trying to work out how we can maximize our effectiveness by using it. We have to understand and respect this. Any solution that relies on Facebook will probably become redundant when net users find another killer social networking site. We need to be thinking about applications which can be completely independent and just pump their data in and out of the latest social networking tools.  
  
lastly - thank you for reading this far, as I have written this post my views have actually evolved. I hope you found this thought provoking.  
  
comments welcome.

        