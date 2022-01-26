---
date: 2009-06-24
title: My Recent Contribution to the House of Lords Information Committee
tags: ["data","osmososft","post"]
---
My name is Simon McManus. I work as a web developer. After recently attending a UKGovBarCamp I noticed that it was difficult to reuse parliament's publications. I made a comment on a parliamentary blog post  
which resulted in Richard contacting me via e-mail. The fact that I was able to comment in the first place has made it possible for me to speak to you now. Thank you for this opportunity.  
  
The essential dissatisfaction I have with the parliament website is that the information is not being published for re-use. In this paper I will explain what I mean by this, why I believe it and offer some alternative solutions. I would be more than happy to come and discuss this with you further and would appreciate any feedback that you might have.  
  
  
Executive Summary  
  
Websites like Wikipedia demonstrate how conversations can take place around information. For each article there is a discussions tab which allows readers and authors to discuss the articles. If you would like the same thing to occur around your meeting transcripts and legislation you need to change the format to make the data referenceable, commentable and easily queried by a programming language.  
  
I believe there are five steps to opening up Parliamentary data:  
1 . Data Copyright  
2 . Making raw data available  
3 . Marking up data with semantic information  
4 . Making data linkable  
5 . exposing data through APIs  
  
each of these parts will now be discussed.  
  
  
::: 1 . Data Copyright  
  
Publishing data online holds little value if the data has not been licensed for reuse. I suggest all parliamentary publications be made available under a creative commons copyright, so that anyone can republish commercially or otherwise.  
  
  
::: 2 . Making Raw data available.  
  
It is important that the raw data dumps which make any application possible are also available to the public. The data should be available be with no style information, no scripting nothing but pure, unadulterated data. While there is value in Parliament building websites/applications it is far more important that developers have equal access to the original data so they can build other applications without the unaffected by the preconceptions of parliament.uk developers.  
  
Currently most parliamentary publications are in PDF form. This causes a number of problems :  
1 .. Individual pages and sections are not indexed by search engines.  
2 .. It is difficult to programmatically extract data from a PDF.  
3 .. It is not possible to reference particular sections of a document.  
  
  
::: 3 . Marking up data with semantic information  
  
Theyworkforyou.com have put together a basic template of how parliament can improve the semantics of parliamentary publications. More details of their suggestions can be found at the following address :  
  
http://www.theyworkforyou.com/freeourbills/techy  
  
I fully endorse these suggestions. If followed, they would make it a great deal easier for developers like me to build new and richer interfaces because it makes the data more meaningful.  
  
  
::: 4 . Making data linkable  
  
When writing the paper it was particularly difficult to find the references from transcripts of your Committee's meetings. It was sent to me in the following form :  
  
  
"The transcript of the meetings the Committee has had as part of its inquiry are available here:  
  
http://www.publications.parliament.uk/pa/ld/lduncorr.htm#info  
(See in particular questions 78, 85 and 86 of the 1 April meeting)."  
  
Finding the information required the following steps to be taken:  
1 .. clicking the above link  
  
2 .. Searching for the meeting on the 1 April  
3 .. clicking another link which downloaded a big PDF file  
4 .. Waiting for the entire document to download  
  
5 .. Searching the pdf for question 78  
6 .. Searching the pdf for question 85  
7 .. Searching the pdf for question 86  
  
I would like to see an implementation where clicking the following three URLs would take you straight to view each question, allow you to read its answer and comment against either.  
  
1 .. http://www.publications.parliament.uk/InformationCommittee/PeopleAndParliament/Meetings/1April09/Question78  
2 .. http://www.publications.parliament.uk/InformationCommittee/PeopleAndParliament/Meetings/1April09/Question85  
3 .. http://www.publications.parliament.uk/InformationCommittee/PeopleAndParliament/Meetings/1April09/Question86  
  
If the information is published in HTML files which are being indexed by Google the bills will be findable in google and extend your outreach to every single user of google.  
  
The simplest way to expose data on the web is to break it down into small individually addressable sections each of which has a unique URL. These URLs can then be sent round in emails, added to a user's favorites or programmatically interrogated.  
  
  
::: 5 . Exposing data through APIs  
  
An Application Programming Interface (API) provides developers an interface for interacting with a data set easily. By making it possible to programatically search legislation and comment against a particular section from a remote site, it becomes much easier for people to build new interfaces for the available data. A good API would make it really easy to build new ways of browsing, searching and commenting on legislation.  
  
Data should be exposed so that it can be presented in ways never expected by those collating the data. It is through this approach that you help people to view and, most importantly, interact with both Houses regarding proposed legislation.  
  
A good API will make data available in a number of different formats. HTML, XML and JSON are a good starting point. From the earliest possible opportunity any code being used to expose data should be open sourced so that developers can extend the existing code base without needing to start from scratch. Not only does this allow people to build things more quickly, it allows developers to extend functionality and form a community of developers working together to improve the nations data infrastructure.  
  
If Parliament wants to engage with people it will be a great deal easier on sites they already visit rather than the parliament.uk site. You cannot expect to engage the majority of the electorate at parliament.uk. It needs to be made particularly easy to integrate the goings on of both Houses into any website so that useful (relevant) data can be pulled in about a given subject.  
  
  
A site about digital rights and copyright should be able to make a call to the API which looks for any recent mentions of "Digital Rights" and "Copyright" and can then embed the results in its own site. I also suspect that providing functionality to comment against the results would massively increase the potential of both Houses to engage with the electorate.  
  
  
Below I have put together a general criteria for exposing data on the web :  
1 .. The data should be indexable and discoverable in google/other search engines.  
2 .. The data should be exposed using open data formats (HTML, oof)  
3 .. The data should be licensed for re-use, even by commercial organisations.  
4 .. It should be possible to browse the data in a web browser.  
5 .. Make the original data set available.  
6 .. Maintain a consistent interface for developers to build against.  
7 .. Any code used to abstract away from the data should be open sourced.  
8 .. Any semantics that can be added to data are beneficial.  
9 .. There should not be separate systems for MPs and the public. Whatever system MPs use to look up bills, track their progress through parliament, find out amendments etc should be available to the public.  
  
The following criteria are not essential but I suspect could have a major effect on parliaments ability to interact with the people online :  
1 .. the information should have a plain English summary. Often bills are full of jargon that makes them incomprehensible to many. A good example is the creative commons licenses. These have a plain English version and a legalspeak version.  
2 .. Electronic book support. All bill, minutes etc should be available in a non-proprietary electronic book format (eg epub) for download.  
  
  
Please note all that all the above should be possible for very little cost. All the software required is available for free with open source software licenses. The primary cost should be for one or two developers who work with the community to expose data based on user/developer feedback.

        