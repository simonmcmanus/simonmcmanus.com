---
date: 2007-07-24
title: Conference Calling with Web21c PHP SDK
tags: ["BT","Conference Call","PHP","SDK","Web21C","post"]
---
Over the last few days I have been consuming my credits for the BT SDK by playing with the conference calling service.   This service lets 4 users connect on the Sandbox and currently 10 on production servers (This may soon been increased to unlimited)  
  
 A member of the SDK support team mentioned that a lot of people have expereinced problems when using the conference calling service so I thought I would try to provide some help.  One of the biggest problems I experienced was accessing particular variables.  In this example I have demonstrated how you can create a call and then use various functions to obtain information about the call.  
  
 The page returns details of each person in the call.  You will notice that participantInfo does not return the phone number of the users connected.  I have requested that this functionality be added but for the time being you will have to store ids against phone numbers when the user is added in order to display the users phone number.  
  
Keep an eye on the blog, my next example will attempt to combine this with the DHTML Phone example I made earlier.  
```js
 <? 
  
require\_once(dirname(\_\_FILE\_\_) . '/../../lib/web21c.php'); 
  
require\_once(dirname(\_\_FILE\_\_) . '/../../config.php');
```
  
```js
$web21c = new Web21c($applicationName, $environment);
```
  
```js
$conf = $web21c->SessionConferencing();
```
  
```js
try 
  
{ 
  
 $conf\_back = $conf->createConference(); 
  
 $confId = $conf\_back->conferenceId; 
  
 $talker1 = $conf->inviteParticipant($confId, 'tel:+447918880749'); 
  
 $talker2 = $conf->inviteParticipant($confId, 'tel:+442087261159'); 
  
 $confInfo = $conf->getConferenceInfo($confId); 
  
 echo '<hr />ConfID : '; 
  
 echo $cid = $confInfo->conferenceInfo->conferenceId;   
  
 echo '<br />Status : '.$confInfo->conferenceInfo->status;   
  
 echo '<br />Start : '.$confInfo->conferenceInfo->startTime;   
  
 echo  '<br />Number of Participants : '.$confInfo->conferenceInfo->numberOfParticipants;   
  
 echo '<br />Duration : '.$confInfo->conferenceInfo->duration;   
  
 //var\_dump($confInfo); 
  
 echo '<hr />'; 
  
 // wait while the users answer their phones 
  
 sleep(5); 
  
 // get call details using the call id returned. 
  
 $conf\_detail = $conf->getParticipants($cid); 
  
  
  
 echo "<hr /><h1> Each Participant</h1>"; 
  
 $ParInfo = $conf\_detail->participantInfos; 
  
 $pars = $ParInfo->participantInfo; 
  
  
  
 foreach ($pars as $par) 
  
 { 
  
  echo ' <hr />'; 
  
  echo  '<b>Participant ID :</b> '.$par->participantId.'<br />'; 
  
  echo  '<b>participantStatus : </b>'.$par->participantStatus.'<br />'; 
  
  $par\_detail = $conf->getParticipantInfo($par->participantId); 
  
  //var\_dump($par\_detail); 
  
 }
```
  
```js
 ?>
```

        