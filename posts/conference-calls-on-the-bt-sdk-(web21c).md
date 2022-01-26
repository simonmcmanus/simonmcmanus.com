---
date: 2007-07-20
title: Conference Calls on the BT SDK (Web21c)
tags: null
---
Conference calls allow you to have more than two participants in a call at any one time. The number of participants varies depending on if you are using the sandbox or production server.  
  
There is currently no an example for the conference call functionality within the PHP examples. The below code provides a very basic example of how to set up the call.  
  
Please note that you will need to change the phone numbers, if you wish to add more participants simple add a new line under :  
  
$talker2 = $conf->inviteParticipant($confId, 'tel:+447000000000');  
  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
  
<?php  
require\_once(dirname(\_\_FILE\_\_) . '/../../web21c.php');  
require\_once(dirname(\_\_FILE\_\_) . '/../common.php');  
  
$web21c = new Web21c($applicationName, $environment);  
  
$conf = $web21c->SessionConferencing();  
  
$conf\_back = $conf->createConference();  
$confId = $conf\_back->conferenceId;  
  
$talker1 = $conf->inviteParticipant($confId, 'tel:+447000000000');  
$talker2 = $conf->inviteParticipant($confId, 'tel:+447000000000');  
  
$confInfo = $conf->getConferenceInfo($confId);  
var\_dump($confInfo);  
//$conf\_detail = $conf->getParticipants($confId);  
//print $conf\_detail;  
?>  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

        