# Java Script
It is a scripting language that is used to make interactive web pages.

## Java Script in HTML Document
You can insert javascript code using **Script** element
We mostly use **src** for passing URL

### Inserting JavaScript in Web page
**HEAD**
**BODY**
**External File**

It is **Case Sensitive Language**

**Comments**
        Single Line : //
        Multi Line : /* ...... */
        
**Array**
        var stu = ["name", "rollno", "branch"]

**Object**
        var stu = { name: "Neha", rollno: 67,branch: "DevOps" }

**Control Flow Statement**
These are same as in C and C++
if
if else
switch
while
do...while
for
break
continue


**PopUp Box**

**alert**

**confirm**
```
var txt;
var r = confirm("Press a button!");
if (r == true) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}
```

**Prompt**
```
var person = prompt("Please enter your name", "GithubUser");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}
```

## Functions
**With parameters**
**Without Parameter**

### Built In Global Functions

alert
prompt
confirm
eval
isFinite
isNaN
parseInt
parseFloat
Number
escape
unescape

**Detailed work on events will be updated**


 ## Objects

**BuiltIn objects**
String
RegExp
Boolean
Number
Array
Math
Date


**Detailed work on BuiltIn Objects and user defined objects will be updated**
