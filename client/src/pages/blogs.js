
import React from "react";
 
/**********
///This is using a Request using Node.js
let uuu = "aswdss"; //let
console.log(uuu);
const data = { test: "asdw" };

  fetch("http://localhost:9090/info", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data);
    uuu = data.data;
  });
  console.log("1"); //Can see if works in Inspecting the Website Page
  console.log(uuu);//Can see if works in Inspecting the Website Page


if(uuu.valueOf() == "aswdss".valueOf()) { //Is this messing with the servers communications?
  fetch("http://localhost:9090/info", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data);
    uuu = data.data;
  });
}
**************************************/

/*
import { CatalogPage, Tags, Results, Element } from "./catalogElements";

let testerr = ""
const SingleDisplay = () => {
  let content = "";
  let contents = []
  let uuu = "aswdss"; //let
console.log(uuu);
const data = { test: "asdw" };
    ///let uuu = "aswdss";
    //let auau = {iids: "Holder"};

  fetch("http://localhost:9090/info", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    //console.log("HALP")
    console.log(data.data);
    uuu = data.data;////
    testerr = uuu
    //return <h1>{data.data}</h1>;
  });
  console.log("1");
  console.log(uuu);////

  let hii = []
  //<h1> failed tester var was called testerr
  contents.push(
  <Element>
    <h1>{uuu}</h1>
    <img src="https://www.bradley.edu/asset/img/bradleyHall.svg" alt="Alternative Text" />
    
</Element>)

  return contents;
}
*/



/////EVERYTHING BELOW IS FUNCTIONING AND IS EXECUTIONABLE 
//////////////////////////This sends
let uuu = "aswdss"; //let
console.log(uuu);
const data = { test: "asdw" };
    ///let uuu = "aswdss";
    //let auau = {iids: "Holder"};

  fetch("http://localhost:9090/info", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    //console.log("HALP")
    console.log(data.data);
    uuu = data.data;////
    //return <h1>{data.data}</h1>;
  });
  console.log("1");
  console.log(uuu);////

if(uuu.valueOf() == "aswdss".valueOf()) {
  fetch("http://localhost:9090/info", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    //console.log("HALP")
    console.log(data.data);
    uuu = data.data;////
    //return <h1>{data.data}</h1>;
  });
}


const Blogs = () => {
  return <h1>{uuu}</h1>; ////Just displays a Single Structures ID which was sent by server
};
 
export default Blogs;








//////////THE CODE BELOW IS A WIP OF DISPLAYING ALL STRUCTURES ENTERIES ON THE SCREEN

