---
date: 2007-11-21
title: MIME Types in for Server Side TiddlyWikis - Download a HTML file from a link
tags: ["ccTiddly","HTML","MIME","Osmosoft","ServerSide","SimonMcManus","TiddlySpot","post"]
---
One of the things we like about TiddlySpot is the way that it immediately provides the save as dialog box when you click the download link. For a demo at the UC Hot House we needed to do something similar. Here is what I did it. If any one knows of a better way to achieve the same goal please let me know.  
  
With PHP its nice and easy to return a different MIME type. This can be done using one line of code :  
  
header("Content-Type: application/zip zip");  
  
There a many different MIME types available, Wikipedia provides a summary of some of the more relevant types at :  
  
[http://en.wikipedia.org/wiki/Internet\_media\_type](http://en.wikipedia.org/wiki/Internet_media_type "http://en.wikipedia.org/wiki/Internet_media_type")  
  
Setting the MIME type to HTML simple loads the webpage into the browser becuase it knows how to display html files. There were two ways to produce the save dialog box, firstly the above example. By telling the browser to expect a Zip file it immediately returns the save as box. I was not overly happy with this because it was not a zip file and the dialog box informed the user they were going to be downloading a PC ZIP Achive :  

![picture-2.png](https://simonmcmanus.files.wordpress.com/2007/11/picture-2.png)

  

  
After some googling I discovered that browsers will return the save as dialog for any file formats that they do not understand. So I changed the MIME type to :  
  
header("Content-Type: application/zisdfsdfpsdf zisdfp");  
  
and got the same except it was defaulting to saying it was saving a .php file in the save dialog box.  
  
This of course only returns an empty file: To make it save the tiddlywiki file I then added :  
\[sourcecode language='php'\]  
  
header("Pragma: public");  
header("Expires: 0");  
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");  
header("Cache-Control: public");  
header("Content-Description: File Transfer");  
header("Content-Type: application/sdfzip zipsdfsdf");  
  
$file = @fopen('index.html',"rb");  
if ($file) {  
while(!feof($file)) {  
print(fread($file, 1024\*8));  
flush();  
if (connection\_status()!=0) {  
@fclose($file);  
die();  
}  
}  
@fclose($file);  
}  
  
\[/sourcecode\]  
The fact that it was saving a PHP file was a problem. This was actually very simple to resolve :I created a .htaccess file in the folder containing the above code and entered :  
  
AddType application/x-httpd-php .htm  
AddType application/x-httpd-php .html  
  
This means that any .html and .htm files will now be processed by the PHP engine. The final step it to change the filename of the file containing the above PHP code so that it is a HTML file.  
  
The end result is the file should prompt you to save a HTML from one click.

        