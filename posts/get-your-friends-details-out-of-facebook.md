---
date: 2007-08-09
title: Get your friends details out of Facebook
tags: ["API","BT","facebok","Facebook","Facebook API","Facebook Application","facebook in the enterprise","fbml","Osmosoft","Phones","PHP","simon mcmanus","SimonMcManus","post"]
---
The below code outputs a HTML table showing all of your facebook friends and their details.  You will need to include the code on a PHP server where you have already registered your application.  
  
This code is far from finished, but provides a very good starting point because it shows how you can access each of the variables.  

  
```js
<?php
```
  
```js
  
require\_once 'facebook.php';
```
  
```js
  
$friends = $facebook->api\_client->friends\_get();
```
  
```js
  
echo '<table border=1>';
```
  
```js
foreach($friends as $friend)
```
  
```js
{
```
  
```js
    echo '<tr>';
```
  
```js
    echo '<td>';
```
  
```js
    $name = $facebook->api\_client->users\_getInfo($friend,'name, pic\_small, birthday, sex, hometown\_location, meeting\_sex, meeting\_for, affiliations, relationship\_status, significant\_other\_id, political, current\_location, activities, interests, music, tv, about\_me, work\_history, education\_history, status');
```
  
```js
    echo "<img src='".str\_replace('/http', '', str\_replace('.jpg/','', $name\[0\]\[pic\_small\]))."'/>";
```
  
```js
  
    echo ' </td><td>';
```
  
```js
    echo $name\[0\]\[name\];
```
  
```js
  
    echo ' </td><td>';
```
  
```js
    echo $name\[0\]\[birthday\];
```
  
```js
    echo ' </td><td>';
```
  
```js
    echo $name\[0\]\[sex\];
```
  
```js
    echo '</td><td>';
```
  

  
```js
    echo $name\[0\]\[hometown\_location\]\[city\].', ';
```
  
```js
    echo $name\[0\]\[hometown\_location\]\[state\].', ';
```
  
```js
    echo $name\[0\]\[hometown\_location\]\[country\].', ';
```
  

  
```js
    echo '</td><td>';
```
  
```js
    echo $name\[0\]\[meeting\_sex\];
```
  
```js
    echo '</td><td>';
```
  
```js
    echo $name\[0\]\[meeting\_for\];
```
  
```js
    echo ' </td><td>';
```
  
```js
    echo ' </td><td>';
```
  
```js
//    echo var\_dump($name\[0\]\[affiliations\]);
```
  

  
```js
    foreach ($name\[0\]\[affiliations\] as $aff)
```
  
```js
    {
```
  
```js
    echo '<ul>';
```
  
```js
        foreach ($aff as $aff\_det)
```
  
```js
            echo '<li>'.$aff\_det.'</li>';
```
  
```js
    echo '</ul>';
```
  
```js
    }
```
  
```js
    echo ' </td><td>';
```
  
```js
    echo $name\[0\]\[relationship\_status\];
```
  
```js
    echo '</td><td>';
```
  
```js
    echo $name\[0\]\[significant\_other\_id\];
```
  
```js
    echo ' </td><td>';
```
  

  
```js
    echo $name\[0\]\[political\];
```
  
```js
    echo '</td><td>';
```
  
```js
    echo '<ul>';
```
  
```js
    foreach ($name\[0\]\[current\_location\] as $aff)
```
  
```js
            echo '<li>'.$aff.'</li>';
```
  
```js
    echo '</ul>';
```
  

  
```js
    //echo $name\[0\]\[current\_location\];
```
  
```js
    echo '</td><td>';
```
  
```js
    echo $name\[0\]\[activities\];
```
  
```js
    echo ' </td><td>';
```
  

  
```js
    echo $name\[0\]\[interests\];
```
  
```js
    echo ' </td><td>';
```
  
```js
    echo $name\[0\]\[music\];
```
  
```js
    echo '</td><td>';
```
  
```js
    echo $name\[0\]\[tv\];
```
  
```js
    echo ' </td><td>';
```
  
```js
    echo $name\[0\]\[about\_me\];
```
  
```js
    echo ' </td><td>';
```
  

  
```js
    echo $name\[0\]\[work\_history\];
```
  
```js
    echo ' </td><td>';
```
  
```js
        foreach ($name\[0\]\[education\_history\] as $aff)
```
  
```js
    {
```
  
```js
    echo '<ul>';
```
  
```js
        foreach ($aff as $aff\_det)
```
  
```js
        {
```
  
```js
            echo '<li>';
```
  
```js
            echo arrayToXML($aff\_det);
```
  
```js
            echo '</li>';
```
  
```js
        }
```
  
```js
    echo '</ul>';
```
  
```js
    }
```
  

  

  
```js
    //echo $name\[0\]\[education\_history\];
```
  

  

  

  
```js
    echo '</td><td>';
```
  
```js
    if ($name\[0\]\[status\]\[time\]!=0)
```
  
```js
        echo $name\[0\]\[status\]\[message\].' - '.date("Y/m/d", $name\[0\]\[status\]\[time\]).'</td></tr>';
```
  
```js
}
```
  
```js
  
echo '</table>';
```
  
```js
?>
```

        