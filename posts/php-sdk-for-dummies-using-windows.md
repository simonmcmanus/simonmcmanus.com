---
date: 2007-07-16
title: PHP SDK for Dummies using Windows
tags: ["BT","Osmosoft","SDK","post"]
---
This page provides instruction for how to using the BT SDK in PHP with XXAMP  
1 .. Install XAMPP ([http://www.apachefriends.org/en/xampp.html](http://www.apachefriends.org/en/xampp.html))  

This is not required but this particular apache configuration has been tested.

  

2 .. Register for an account at [http://sdk.bt.com/](http://sdk.bt.com/)

  

3 .. Download the PHP source files: Downloads > PHP

  

4 ..  Unzip the directory into your htdocs folder.  If you installed XAMPP to the default location the htdocs folder will be in : C:\\xampp\\htdocs

  

Unzip the files to a folder of your choosing. With the default install this can be found at:

  
C:\\xampp\\htdocs\\phpWeb21C  

5 ..  Registering your applications

  

Note : Before you can use the SDK you will need to register an application (One registration covers all of your programs)

  

You can register application at the URL below:

  

  

https://sdk.bt.com/Default.aspx?TabId=127

  
In order to run the certificate generation tool you may need  the latest version of “Java Runtime Environment (JRE)”  from [http://java.sun.com/javase/downloads/index.jsp](http://java.sun.com/javase/downloads/index.jsp) (you will receive an error when attempting to run the tool if you require this upgrade.)  
  
When you use the tool 3 files will be generated on your desktop. (I called my app Umbrella)  
  
_Umbrella\_Sandbox\_PrivateKey.pem_  
  
_Umbrella\_Sandbox\_PublicKey.pem_  
  
_Umbrella\_Sandbox\_SignedCert.pem_  
  
Two of those files :  
  
_Umbrella\_Sandbox\_PrivateKey.pem_  
  
_Umbrella\_Sandbox\_SignedCert.pem_  

Should then be place in a folder called keys (which you may need to create). E.g.

  
C:\\xampp\\htdocs\\phpWeb21C\\keys  
  
6 .. Open the common.php file which can be found in the folder:  
  
C:\\xampp\\htdocs\\phpWeb21C\\examples\\common.php  
  
7 .. Ensure that the application name is the same as the one specified when generating your certificate.  
  
8 ..  Open the folder C:\\xampp\\htdocs\\phpWeb21C\\examples\\cmds  
  
You should now be able to configure and run these files.  
  
9 ..  Running the code.  If you have used the default installation settings go to and edit the file:  
  
C:\\xampp\\htdocs\\phpWeb21C\\examples\\cmds\\makeCall.php  
  
Change the variables for :  
  
$calling = "tel:+44791";  
  
$called = "tel:+44791";  
  
To the numbers you wish to ring when the page is run.  
  
When you now open the file in a browser the phones should start ringing. http://127.0.0.1/phpWeb21C/examples/cmds/makeCall.php

        