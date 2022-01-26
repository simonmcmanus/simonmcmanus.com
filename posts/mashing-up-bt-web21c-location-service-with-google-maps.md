---
date: 2007-07-20
title: Mashing Up BT Web21c Location service with Google Maps
tags: ["BT","Google Maps","location","location service","Mash Up","Web21C","post"]
---
This example combines the  two post  ([Google Maps API](http://simonmcmanus.wordpress.com/2007/07/20/the-google-maps-api/ "google Maps API") and [your location from the sdk](http://simonmcmanus.wordpress.com/2007/07/20/your-location-from-the-bt-sdk-web21c-in-google-maps/ "your location from the sdk."))to automatically look up a phones location and then map it straight to a google map box.  
```js
The code is below, please note you should only need to change the four variables at the top of the code :
```
  
```js
<?php 
  
require\_once(dirname(\_\_FILE\_\_) . '/../../web21c.php'); 
  
require\_once(dirname(\_\_FILE\_\_) . '/../common.php');
```
  
```js
//  command to locate a mobile deviice 
  
//  - set these to sensible values
```
  
```js
$deviceId = 'tel:+PHONENUMBER'; 
  
$username = [USERNAME@MAIL.COM](mailto:USERNAME@MAIL.COM); 
  
$password = "YOUR PASSWORD"; 
  
$googleAPIKey = "YOUR GOOGLE API KEY";
```
  
```js
$web21c = new Web21c($applicationName, $environment);
```
  
```js
// login as a user 
  
$wla = $web21c->WhiteLabelAuthentication(); 
  
$wla->login($username, $password);
```
  
```js
 //  locate mobile 
  
$location = $web21c->Location(); 
  
$location->web21cUser = $wla->web21cUser;
```
  
```js
try 
  
{ 
  
 $r = $location->getGeoLocation($deviceId); 
  
} 
  
catch (Web21cPermissionDeniedException $e) 
  
{ 
  
 print "requesting device owner's permission to be located ..n"; 
  
 print "try again later when the owner may have respondedn"; 
  
 $access = $web21c->LocationPermission(); 
  
 $access->web21cUser = $wla->web21cUser; 
  
 $access->requestPermission($deviceId); 
  
}
```
  
```js
// var\_dump($r->geoLocation);
```
  
```js
echo 'Longitude : '.$r->geoLocation->longitude. '<br />'; 
  
echo 'Latitude : '.$r->geoLocation->latitude. '<br />'; 
  
echo "Click below to see the location of mobile number ".$deviceId."<br />"; 
  
echo "<a href='http://maps.google.com?q=".$r->geoLocation->latitude.",%20".$r->geoLocation->longitude."'>Google Maps</a> "; 
  
//echo 'start : '.$r->getGeoLocation()->getLongitude(); 
  
?> 
  
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
  
  "[http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd](http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd)"> 
  
<html xmlns="[http://www.w3.org/1999/xhtml](http://www.w3.org/1999/xhtml)"> 
  
  <head> 
  
    <script src="[http://maps.google.com/maps?file=api&v=2&key=<?=$googleAPIKey](http://maps.google.com/maps?file=api&v=2&key=<?=$googleAPIKey)?>" 
  
      type="text/javascript"></script>
```
  
```js
</head> 
  
  <body onload="load()" onunload="GUnload()"> 
  
    <p> 
  
  <script type="text/javascript">    
  
  function load() 
  
  {      
  
   if (GBrowserIsCompatible()) 
  
   {        
  
    var map = new GMap2(document.getElementById("map"));        
  
    var map = new GMap2(document.getElementById("map")); 
  
    map.setCenter(new GLatLng(<?=$r->geoLocation->latitude?>, <?=$r->geoLocation->longitude?>), 13); 
  
    map.openInfoWindow(map.getCenter(), 
  
    document.createTextNode("Simon is here ")); 
  
    }   
  
  }    
  
   
  
  </script> 
  
      <span class="style1">BT SDK Location Service </span></p> 
  
    <div id="map" style="width: 500px; height: 300px"></div> 
  
  </body> 
  
</html> 
  
 
```

        