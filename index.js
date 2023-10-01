/*
1st method without sync
const fs= require("fs");
// console.log(fs);
fs.readFile("./sample.txt","utf-8",(err,data)=>{
   if(err){
    return err;
   }
   console.log(data);
});
console.log("i am first")

*/

/*
2nd method  wiith async
const fs= require("fs");
// console.log(fs);
const a= fs.readFileSync("./sample.txt","utf-8");

console.log(a);
console.log("i am first")
*/
/*
3rd method without async

const fs=require("fs")
const a= "this is ravi";
fs.writeFile("./sample.txt",a, ()=>{
    console.log("written");
});
console.log("I am first")

*/
/*
4th method with async
const fs=require("fs")
const a= "this is ravi rajput";
fs.writeFileSync("./sample.txt",a);
console.log(a);
console.log("I am first")
*/
/*
path methods
const path = require("path");
const a=path.extname("/study/index.js");
console.log(a);
*/
/*
find memory
const os=require("os");
console.log(os.freemem());
*/

/*
device name
const os=require("os");
console.log(os.hostname());
*/
/*
total memory
const os=require("os");
console.log(os.totalmem());
*/

//http
/*
pokemon
const pokemon=require("pokemon")
console.log(pokemon.random());
*/
/*
list of pokemon
const pokemon=require("pokemon")
console.log(pokemon.all());
*/



/*
file based
const a={
    avarage:(a,b)=>{
        console.log((a+b) /2);
    },

    percent:(a,b)=>{
        console.log((a/b)*100);
    },
};
module.exports=a;

*/

//file based, build in,third party

// making server below---
//const { response } = require("express");
const http = require("http");

const fs = require("fs")

//const PORT = 2000;
const PORT= process.env.PORT;

//const hostanme = "localhost";
const home = fs.readFileSync("./server.html", "utf-8")

const server = http.createServer((req, res) => {
    // console.log(req.url);

    if (req.url === "/") {
        return res.end(home)
    }
    if (req.url === "/about") {
        return res.end("<h1>About page</h1>")
    }
    if (req.url === "/contact") {
        return res.end("<h1>contact page</h1>")
    }
    if (req.url === "/service") {
        return res.end("<h1>service page</h1>")
    }
    else {
        return res.end("<h1>404 page not found</h1>")
    }



    // res.end("<h1>Hello world</h1>")
    
    // Server.listen(PORT, hostanme, () => {
    //     console.log(`Server is working on http://${hostanme
    //         }:${PORT}`);
    // });

     });
Server.listen(PORT, () => {
    console.log(`Server is working`);
});


//host
/*
go to package.json, write start, inside file name,
give command- npm start
host in any website- heroku.com
do signup for create account
search on google heroku cly

according to device like, windoow,mac,ubantu, 
any you want copy command and run

do download aslo, installl- next next etc.

go to heroku- create new
app name- testin1india,
region- choses anyone
click - create app

blow install the heroku cli-
heroku-login copy and paste in terminal
make one file--.gitignore-- /node_modules
for deploye--
git init
git add.

for deploye heroku, we create one file- procfile
procfile-- web: node index.js
git add.
git commit -m "ravi"
heroku git:remote-a testing- this command
git remote
git push heroku master
go to app setting-


*/

