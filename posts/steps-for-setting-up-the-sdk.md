---
date: 2007-08-13
title: Steps for setting up the SDK
tags: ["API","BT","generate key","Osmosoft","PHP","SDK","simon mcmanus","SimonMcManus","web service","Web21C","post"]
---
For a number of BT Osmosoft demos we have demonstrated how to make phone calls from within a TiddlyWiki, I thought i would provide a post which explains exactly what we did in order to set up the PHP side of these demos.  
  
The demo I am refering to can be found at the following URL's:  
  
\- [Speed Geeking](http://osmosoft.com/events/speedgeeking/ "Speed Geeking")  
  
**Step 1 ..** You need a web server running :  

  
*   PHP 5.2
  
*   OpenSSL and SOAP PHP extensions
  

  

**Step 2 ..** Register for an account at [http://sdk.bt.com/](http://sdk.bt.com/)

  

  

  

**Step 3 ..** Download the PHP source files: Downloads > PH**P**

  

  

**Step 4 ..** Upload the files to a folder on your web server.

  

  

**Step 5 ..**  Registering your applications...

  

  

Note : Before you can use the SDK you will need to register an application (One registration covers all of your programs)

  

You can register application at the URL below:

  

  

https://sdk.bt.com/Default.aspx?TabId=127

  
In order to run the certificate generation tool you may need  the latest version of “Java Runtime Environment (JRE)”  from [http://java.sun.com/javase/downloads/index.jsp](http://java.sun.com/javase/downloads/index.jsp) (you will receive an error when attempting to run the tool if you require this upgrade.)  
  
When you use the tool 3 files will be generated on your desktop. (I called my app Umbrella)  
  
_APPLICATIONNAME\_Sandbox\_PrivateKey.pem_  
  
_APPLICATIONNAME\_Sandbox\_PublicKey.pem_  
  
_APPLICAIONNAME\_Sandbox\_SignedCert.pem_  
  
Two of those files :  
  
_APPLICATIONNAME\_Sandbox\_PrivateKey.pem_  
  
_APPLICAIONNAME\_Sandbox\_SignedCert.pem_  

Should then be place in a folder called keys (which you may need to create).

  
**Step 6** .. Open the common.php file which can be found in the folder:  
  
\\examples\\common.php  
  
**Step 7 ..** Ensure that the application name is the same as the one specified when generating your certificate**.**  
  
**Step 9 ..**  Running the code.  If you have used the default installation settings go to and edit the file:  
  
\\examples\\cmds\\makeCall.php  
  
Change the variables for :  
  
$calling = “tel:+44791″;  
  
$called = “tel:+44791″;  
  
You will need to modify these two lines so that they can receive an input from the URL, I would suggest changing these to:  
  
$calling ='tel:'.$\_REQUEST\['callingParty'\];  
  
$called = 'tel:'.$\_REQUEST\['calledParty'\] ;  
  
You will need to ensure that the variable names are the same as the variables sent my TiddlyWiki.  
  
Let me know if you have any problems.

        