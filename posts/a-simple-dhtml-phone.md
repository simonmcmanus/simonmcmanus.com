---
date: 2007-07-24
title: A Simple DHTML Phone
tags: ["BT","DHTML","Javascript","Phone","SDK","Web21C","post"]
---
I spent a while searching for this script only to realise it would be quicker to write it myself!  
  
This simple application uses javascript and HTML to allow the user to enter a number using the keypad and then let them make a call. This example can link to makeCall.php in the examples directory if you wish to make calls.  
  
[![phone_call.gif](https://simonmcmanus.files.wordpress.com/2007/07/phone_call.gif)](https://simonmcmanus.files.wordpress.com/2007/07/phone_call.gif "phone_call.gif")  
  
Just copy the code into a HTML file in the root of the BT PHP directory and you should be in business.  
  
Here is the code :  
```js
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
```
  
```js
 <script type="text/javascript">
  
  
function add(id)
  
{ form1.number.value = form1.number.value + id ;
  
 if (id=="C")
  
 { form1.number.value = '';
  
 }
  
}
  
function pre\_submit(a)
  
{
  
 location.href="examples/makeCall.php?tel=" + document.form1.number.value;
  
}
  
  
</script>
  
   <form name="form1" id='form1' method="post" action="">
  
       <table width="154" border="0">
  
            <tr>
  
              <td colspan="4"><input name="number" type="text"    onkypress="check\_type('d');"  id="number"></td>
  
            </tr>
  
            <tr>
  
              <td width="24"></td>
  
              <td width="24"><input name="1"   type="button" onClick="add(this.value);" id="1" value="1"></td>
  
              <td width="28"><input name="2" type="button" onClick="add(this.value);"  id="2" value="2"></td>
  
              <td width="52"><input name="3" type="button" onClick="add(this.value);"  id="3" value="3"></td>
  
            </tr>
  
            <tr>
  
              <td> </td>
  
              <td><input name="4" type="button" onClick="add(this.value);"  id="4" value="4"></td>
  
              <td><input name="5" type="button" onClick="add(this.value);"  id="5" value="5"></td>
  
              <td><input name="6" type="button" onClick="add(this.value);"  id="6" value="6"></td>
  
            </tr>
  
            <tr>
  
              <td> </td>
  
              <td><input name="7" type="button" onClick="add(this.value);"  id="7" value="7"></td>
  
              <td><input name="8" type="button" onClick="add(this.value);"  id="8" value="8"></td>
  
              <td><input name="9" type="button" onClick="add(this.value);"  id="9" value="9"></td>
  
            </tr>
  
            <tr>
  
              <td><p> </p>              </td>
  
              <td><input name="+" type="button" onClick="add(this.value);"  id="+" value="+"></td>
  
              <td><input name="0" type="button" onClick="add(this.value);"  id="0" value="0"></td>
  
              <td><input name="Clear" type="button" onClick="add(this.value);"  id="Clear" value="C"></td>
  
            </tr>
  
            <tr>
  
             <td colspan="4">
  
      <div align="center">
  
        <p>            </p>
  
        <p>
  
          <input name="Make Call" type="button" onClick="pre\_submit(document.form1.number.value)"  id="Make Call" value="Make Call">
  
              </p>
  
      </div></td>
  
            </tr>
  
     </table>
  
</form>
```

        