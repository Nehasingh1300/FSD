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


### PopUp Box
**alert**
```
<!DOCTYPE HTML>
<!DOCTYPE html>
<html>
<head>
	<title>Using Alert</title>
</head>
<body>

<script type="text/javascript">

	alert("Welcome!");
</script>

</body>
</html>
```

**confirm**
```
<!DOCTYPE html>
<html>
<head>
	<title>Using Confirm Box</title>
</head>
<body>

<script type="text/javascript"> 
	var choice = confirm("Do you really want to leave all your friends?");
	if(choice)
		document.write("Ignore all People!");
	else
		document.write("Dont do this to yourself");
</script>

</body>
</html>
```

**Prompt**
```
<!DOCTYPE html>
<html>
<head>
	<title>Using prompt</title>
</head>
<body>

<button onclick="myFunction()">Check Result</button>

<p id="demo"></p>

<script type="text/javascript">
	var name = prompt("Enter your name", "Pranjal");
	if(name==null || name==" ") name = "visitor";
	{
		document.write("Hi "+ name + " Welcome!<br><br>")
	}
}
</script>

</body>
</html>
```

## Functions
**With parameters** <br /> 
**Without Parameter** <br /> 

### Built In Global Functions

***alert <br /> 
prompt <br /> 
confirm <br /> 
eval <br /> 
isFinite <br /> 
isNaN <br /> 
parseInt <br /> 
parseFloat <br /> 
Number <br /> 
escape <br /> 
unescape***

```
<!DOCTYPE html>
<html>
<head>
	<title>Using prompt</title>
</head>
<body>

<button onclick="myFunction()">Check Result</button>

<p id="demo"></p>

<script type="text/javascript">
	var name = prompt("Enter your name", "Pranjal");
	if(name==null || name==" ") name = "visitor";
	{
		document.write("Hi "+ name + " Welcome!<br><br>")
	}

	var number = prompt("Enter your number", "9587760834");
	if(name==null || name==" ") name = "9587760834";
	{
		document.write("Your number is "+ number + "<br><br>" );
	}

	var iffinite = isFinite(number);
	document.write("Your number is "+ number +", is it finite?"+ iffinite + "<br><br>");

	var tofloat = parseFloat(number);
	document.write("Your number in float is " + tofloat + "<br><br>");

	var toint = parseInt(number);
	document.write("Your number in integer is "+ toint + "<br><br>");

	var num1 = "5873945";
	document.write("The number given in string is in integer now!! "+ num1 +"<br><br>");



	function myFunction() {
	var x = 10;
	var y = 20;
	var a = eval("x * y") + "<br>";

	var res = a;
	document.write("Result is " +\\\
</body>
</html>
```

### Events



## Objects

**BuiltIn objects**
String<br>
RegExp<br>
Boolean<br>

Number<br>
Array<br>
Math<br>
Date<br>


## Working with Browser Object
**Window Object** : window.propertyName ( open window in browser to display the Web Page )
**Navigator Object** : navigator.propertyName ( display information about browser and type of information )
**History Object** : history.propertyName ( consist array of URLs visited by user in browser )
**Screen Object** : screen.propertyName ( contain information about dimension of display screen )

## Working with document object
Provide access to all HTML elements

### Cookies
Each time computer request a web page from server, the server refers to created cookie for displaying the requested web page.<br>
Some commonly used attributes of cookie:
**name**
**expires**
**domain**
**path**
**secure**


