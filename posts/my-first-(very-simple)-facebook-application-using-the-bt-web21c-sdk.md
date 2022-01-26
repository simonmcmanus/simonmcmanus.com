---
date: 2007-07-16
title: My First (very simple) Facebook Application using the BT Web21c SDK
tags: ["BT","Facebook API","Facebook Application","SDK","Web21C","post"]
---
This is a simple proof of concept  
  
Firstly I took the existing PHP example code for CallMe (from the BT SDK PHP Examples) and modified it.  
  
For more info on getting the PHP SDK set up please see [this post](http://simonmcmanus.wordpress.com/2007/07/16/php-sdk-for-dummies-using-windows-2/ "this post.").  It talk about setting up the SDK locally but its very similiar when FTPing up to a live web server.  
  
Please note that should you want to use this code you will need to modify  the line :  
  
    $called = "tel:+44YOUR\_MOBILE\_NUMBER\_HERE";  
  
 \_\_\_\_\_\_  
  
 #!/usr/bin/env php  
<?php  
require\_once(dirname(\_\_FILE\_\_) . '/../../web21c.php');  
require\_once(dirname(\_\_FILE\_\_) . '/../common.php');  
  
if(!$\_REQUEST\['tel'\])  
{  
echo 'no number to call';  
exit;  
}  
    $calling = "tel:+".$\_REQUEST\['tel'\];  
    $called = "tel:+44YOUR\_MOBILE\_NUMBER\_HERE";  
  
    /\*  
     \*  make one phone ring another  
     \*/  
    $web21c = new Web21c($applicationName, $environment);  
  
    $voice = $web21c->SessionThirdPartyCall();  
  
    $r = $voice->makeCall($calling, $called, 30);  
  
    print "call made as : " . $r->callId . "\\n";  
  
?>  
  
\_\_\_\_\_\_  
  
Putting this code up on the internet will expose your account to others so we suggest placing it somewhere that only you know about it.  
  
The changes mean that a user can call your number by passing it in the url.....eg.....  
  
  phpWeb21C/cmds/MakeCall.php?tel=OTHER TEL NUM  
  
the format of the number is 44000000000  (the + is added by the php file)  
  
 You can check that it works simply by specifying a different phone number to the one specified previously.  
  
To create the Facebook application I simply provided the introdution to facebook apps....  
  
[http://developers.facebook.com/step\_by\_step.php](http://developers.facebook.com/step_by_step.php)  
  
I suggest you go up to at least step 18.  
  
When you have got this far you can change the index.php file so it contains the code below:  
  
Please note that you will need to change  the action value to the absolute URL where the BT SDK files are stored.  
  
\_\_\_\_\_\_\_\_  
<form action="[http://YOURAPPLICATIONURL/phpWeb21C/examples/cmds/makeCall.php](http://yourapplicationurl/phpWeb21C/examples/cmds/makeCall.php)">  
<input type="text" name="tel" />  
<input type="SUBMIT" name="SUBMIT"  value="submitx\`"/>  
</form>  
\_\_\_\_\_\_

        