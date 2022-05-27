---
date: 2007-08-09
title: Get your friends details out of Facebook
tags: ["API","BT","facebok","Facebook","Facebook API","Facebook Application","facebook in the enterprise","fbml","Osmosoft","Phones","PHP","simon mcmanus","SimonMcManus","post"]
---
The below code outputs a HTML table showing all of your facebook friends and their details.  You will need to include the code on a PHP server where you have already registered your application.  
  
This code is far from finished, but provides a very good starting point because it shows how you can access each of the variables.  

  
```js
<?php
require\_once 'facebook.php';
$friends = $facebook->api\_client->friends\_get();
echo '<table border=1>';
foreach($friends as $friend)
{
    echo '<tr>';
    echo '<td>';
    $name = $facebook->api\_client->users\_getInfo($friend,'name, pic\_small, birthday, sex, hometown\_location, meeting\_sex, meeting\_for, affiliations, relationship\_status, significant\_other\_id, political, current\_location, activities, interests, music, tv, about\_me, work\_history, education\_history, status');
    echo "<img src='".str\_replace('/http', '', str\_replace('.jpg/','', $name\[0\]\[pic\_small\]))."'/>";
  
    echo ' </td><td>';
    echo $name\[0\]\[name\];
    echo ' </td><td>';
    echo $name\[0\]\[birthday\];
    echo ' </td><td>';
    echo $name\[0\]\[sex\];
    echo '</td><td>';
    echo $name\[0\]\[hometown\_location\]\[city\].', ';
    echo $name\[0\]\[hometown\_location\]\[state\].', ';
    echo $name\[0\]\[hometown\_location\]\[country\].', ';
    echo '</td><td>';
    echo $name\[0\]\[meeting\_sex\];
    echo '</td><td>';
    echo $name\[0\]\[meeting\_for\];
    echo ' </td><td>';
    echo ' </td><td>';
//    echo var\_dump($name\[0\]\[affiliations\]);
    foreach ($name\[0\]\[affiliations\] as $aff)
    {
    echo '<ul>';
        foreach ($aff as $aff\_det)
            echo '<li>'.$aff\_det.'</li>';
    echo '</ul>';
    }
    echo ' </td><td>';
    echo $name\[0\]\[relationship\_status\];
    echo '</td><td>';
    echo $name\[0\]\[significant\_other\_id\];
    echo ' </td><td>';

    echo $name\[0\]\[political\];

    echo '</td><td>';

    echo '<ul>';

    foreach ($name\[0\]\[current\_location\] as $aff)
    echo '<li>'.$aff.'</li>';
    echo '</ul>';
    //echo $name\[0\]\[current\_location\];
    echo '</td><td>';
    echo $name\[0\]\[activities\];
    echo ' </td><td>';
    echo $name\[0\]\[interests\];
    echo ' </td><td>';
    echo $name\[0\]\[music\];
    echo '</td><td>';
    echo $name\[0\]\[tv\];
    echo ' </td><td>';
    echo $name\[0\]\[about\_me\];
    echo ' </td><td>';
    echo $name\[0\]\[work\_history\];
    echo ' </td><td>';
        foreach ($name\[0\]\[education\_history\] as $aff)
    {
    echo '<ul>';
        foreach ($aff as $aff\_det)
        {
            echo '<li>';

            echo arrayToXML($aff\_det);
            echo '</li>';
        }
    echo '</ul>';

    }

    //echo $name\[0\]\[education\_history\];

    echo '</td><td>';
    if ($name\[0\]\[status\]\[time\]!=0)
        echo $name\[0\]\[status\]\[message\].' - '.date("Y/m/d", $name\[0\]\[status\]\[time\]).'</td></tr>';
}
  
echo '</table>';

?>
```

        