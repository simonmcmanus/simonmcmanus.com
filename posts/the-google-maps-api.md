---
date: 2007-07-20
title: The Google Maps API
tags: ["API","BT","Google","Google Maps","post"]
---
Now that we can find out the logitude and latitude of  a persons mobile number ([see this post](http://simonmcmanus.wordpress.com/2007/07/20/your-location-from-the-bt-sdk-web21c-in-google-maps/ "see this post")) the next step is to get the Google API set up.   This post talks you through setting up the Maps API (its very simple)  
  
 1 .. First of all you need to register for a google maps api account. You can do that [here](http://www.google.com/apis/maps/signup.html "here")  
  
2 ..  Make sure that you specify a the folder that you file will actually be sitting in. (it wont work otherwise)  
  
3 ..  You then simply need to create a file in the folder specifed and then add the below code.  
  
4 .. Note that you will need to change the "YOURKEY" value to your key.  
  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
  
 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"  
  "[http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd](http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd)">  
<html xmlns="[http://www.w3.org/1999/xhtml](http://www.w3.org/1999/xhtml)">  
  <head>  
    <script src="[http://maps.google.com/maps?file=api&v=2&key=YOURKEY](http://maps.google.com/maps?file=api&v=2&key=YOURKEY)"  
      type="text/javascript"></script>  
  
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
    map.setCenter(new GLatLng(51.5052680969, -0.102480553091), 13);  
    map.openInfoWindow(map.getCenter(),  
    document.createTextNode("Simon is here "));  
    }    
  }     
    
  </script>  
      <span class="style1">BT SDK Location Service </span></p>  
    <div id="map" style="width: 500px; height: 300px"></div>  
  </body>  
</html>  
  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
  
On the above application the script is current hard coded to show my current location (51.5052680969, -0.102480553091).  Over the coming posts I will discuss how to integrate this fuctionality into the the [BT SDK location example](http://simonmcmanus.wordpress.com/2007/07/20/your-location-from-the-bt-sdk-web21c-in-google-maps/ "BT SDK location example")

        