---
date: 2007-07-20
title: Your Location from the BT SDK (Web21c) in Google Maps
tags: ["BT","Google","Google Maps","location","location service","Maps","SDK","Web21C","post"]
---
  

  

The steps to setting up a very  basic example of the BT Web21c location service are below.  Over the coming weeks I will evolve these example and hope to release a new version of the PHP examples provided on the official [Web21c site](http://sdk.bt.com "Web21c Site").

  

 This app results in in a link which when clicked displays the mobiles current location in google maps.

  

If you need to get the SDK set up you may find some help in [this post.](http://simonmcmanus.wordpress.com/2007/07/16/php-sdk-for-dummies-using-windows-2/ "this post")  When the examples have  evolved I will publish a new step by step example of how to get set up in the first place.

  
1 ..  Before you can view a phones location you must first register the user who you wish to track. This is done using the addUser.php page in the examples directory. I have added the code below:  
  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
  
addUser.php   
  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
  
<?php  
require\_once(dirname(\_\_FILE\_\_) . '/../../web21c.php');  
require\_once(dirname(\_\_FILE\_\_) . '/../common.php');  
  
     //  command to add a user     
    $web21c = new Web21c($applicationName, $environment);  
    $wla = $web21c->WhitelabelAuthentication();  
    $wla->addUser([your-email@mail.com](mailto:your-email@mail.com));  
    //  dump response  
    var\_dump($wla->getAllUsers());  
?>   
  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
  
Please note that you will need to change "[your-email@mail.com](mailto:your-email@mail.com)" to the email address of the user that you wish to be added.  
  
 The bottom line will display any errors that are returned.  
  
 2 ..  When the user has been added they will recieve a password via email.  
  
3 ..  With the password you will now be able change three variables in locate.php  and then run the file.  
  
The three variables you need to change are :  
  
$deviceId = 'tel:+440000000000';  
$username = [youremail@mail](mailto:youremail@mail.com)[.](mailto:simon.mcmanus@.com)com;  
$password = "YOURPASS";  
  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
  
locate.php  
  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   
  
<?php  
require\_once(dirname(\_\_FILE\_\_) . '/../../web21c.php');  
require\_once(dirname(\_\_FILE\_\_) . '/../common.php');  
  
//  command to locate a mobile deviice  
//  - set these to sensible values  
  
$deviceId = 'tel:+44700000000000';  
$username = "[YOURMAIL@MAIL.com](mailto:simon.mcmanus@bt.com)";  
$password = "YOURPASSWORD";  
  
$web21c = new Web21c($applicationName, $environment);  
  
// login as a user  
$wla = $web21c->WhiteLabelAuthentication();  
$wla->login($username, $password);  
  
 //  locate mobile  
$location = $web21c->Location();  
$location->web21cUser = $wla->web21cUser;  
  
try  
{  
 $r = $location->getGeoLocation($deviceId);  
}  
catch (Web21cPermissionDeniedException $e)  
{  
 print "requesting device owner's permission to be located ..\\n";  
 print "try again later when the owner may have responded\\n";  
 $access = $web21c->LocationPermission();  
 $access->web21cUser = $wla->web21cUser;  
 $access->requestPermission($deviceId);  
}  
  
// var\_dump($r->geoLocation);  
  
echo 'Longitude : '.$r->geoLocation->longitude. '<br />';  
echo 'Latitude : '.$r->geoLocation->latitude. '<br />';  
echo "Click below to see the location of mobile number ".$deviceId."<br />";  
echo "<a href='http://maps.google.com?q=".$r->geoLocation->latitude.",%20".$r->geoLocation->longitude."'>Google Maps</a> ";  
//echo 'start : '.$r->getGeoLocation()->getLongitude();  
?>  
  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

        