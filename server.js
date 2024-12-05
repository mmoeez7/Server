// import http from 'http';
// import fs from 'fs';
//    Write a Node.js script to perform the following tasks using the fs module:
//    Create a new file and write some content into it.
//    Read the content of the file and log it to the console.
//    Append new content to the same file.
//    Delete the file.
// const path = "example.txt";

// fs.writeFile(path, "Hello.", (err) => {
//   if (err) {
//     return console.error("Error writing file:" (err));
//   }
//   console.log("File created .");

//   fs.readFile(path, "utf8", (err, data) => {
//     if (err) {
//       return console.error("Error reading file:" (err));
//     }
//     console.log("Reading content from the file:");
//     console.log(data);

//     fs.appendFile(path, "\nHere is some appended content.", (err) => {
//       if (err) {
//         return console.error("Error appending to file:", (err));
//       }
//       console.log("New content appended.");


//       fs.unlink(path, (err) => {
//          if (err) {
//           return console.error("Error deleting file:" (err));
//            }
//          console.log("File deleted successfully.");
//       });
//     });
//   });
// });




// var os = require('os');
// console.log("Platform: " + os.platform());
// console.log("Architecture: " + os.arch());

// const os = require('os');
// console.log('Architecture:', os.arch());
// console.log('Platform:', os.platform()); 
// console.log('OS Type:', os.type()); 
// console.log('Total Memory (GB):', (os.totalmem() / 1e9).toFixed(2)); 
// console.log('Free Memory (GB):', (os.freemem() / 1e9).toFixed(2)); 
// console.log('Uptime (hours):', (os.uptime() / 3600).toFixed(2)); 
// console.log('Home Directory:', os.homedir()); 
// console.log('Network Interfaces:', os.networkInterfaces());

import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import bodyparser from 'body-parser'
let app = express();
dotenv.config();


app.use(express.json());
app.use(logger("dev"));
app.use(bodyparser.json());

app.use("/get",()=>{
    console.log("The data is set.")
})

let createserver = process.env.PORT
app.listen(createserver,()=>{
    console.log(`server is started!: ${createserver}`)
})







// const server = http.createServer((req, res) => {
    // res.statusCode = 200; // Set the status code to 200 (OK)
    // res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
    // res.end('Hello, World!\n'); // Send a response
    // fs.readFile('Example.html', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    //   });

//     fs.appendFile('Example.txt', 'Hello content!', function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });

//     fs.open('mynewfile2.txt', 'w', function (err, file) {
//         if (err) throw err;
//         console.log('Saved!');
//       });

//     fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });
//   });

// server.listen(4000, ()=> {
//     console.log("Server is Started...")
// })

// fs.writeFile('Example.html','This file is occupied',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('DONE');
//     }
// })

// fs.readFile

// status code:?