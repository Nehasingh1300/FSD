# Set up lite-server
## Prerequisites<br>
1) Install Visual Studio Code<br>
2) Install NodeJS <br>
3) Have a command line for usage of GitHub, have account in github and a project on which you will work.<br>
<br>

### Step 1<br>
Open command line terminal for the project where you have your code and type 
```
npm init
```
To	initialize	a	package.json file	for	your project,	type	at	the	prompt	in	your	project	directory<br>
Input all infromation asked and enter your github repository, description and author.<br>
### Step 2<br>
Type ls to check if you got node_modules folder and package.json file<br>
```
ls
```
<br>
### Step 3<br>
If you want NPM to install a node package, this is how you're going to invoke it and then you'd say lite-server. And then, we also want to save the fact that our project is using the lite server. So we will save this information in the package.json file. So to do that, you're going to type in -- save-dev. Now the save-dev option specifies that this lite server is used for development dependency for our project.<br>
```
npm install lire-server --save-dev
```
<br>
### Step 4<br>
Open the package.json folder in Visual Studio Code and check the information you entered in the npm installing time.<br>
Enter the code in the script
```
 "scripts": {
    "start": "npm run lite",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lite": "lite-server"
  },
```
<br>After save this and you will see your index.html file in browser if you do any change to it then you will be able to see the changes automatically after saving the change.<br>
