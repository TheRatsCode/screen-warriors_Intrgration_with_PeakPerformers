
import React from "react";
import {Tags, Results, Element } from "./catalogElements";
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


/*
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
    uuu = data.data;////uuu = data.data.structure_id;////
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
*/

/*
//////////////////WORKING W ROUTERS
let uuu = "aswdss"; //let
console.log(uuu);
const data = { test: "asdw" };
    ///let uuu = "aswdss";
    //let auau = {iids: "Holder"};

  fetch("http://localhost:9090/blogs", {
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
    uuu = data.data;////uuu = data.data.structure_id;////
    //return <h1>{data.data}</h1>;
  });
  console.log("1");
  console.log(uuu);////
*/













//////////////////WORKING W ROUTERS
//////////////////WORKING W ROUTERS --> Currently works for single entry being sent
//let uuu = "aswdss"; //let
let query = []
console.log(query);
const data = { test: "asdw" };

  fetch("http://localhost:9090/blogs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); //array
    //console.log(data._id);
    //uuu = data._id;
    //uuu = data[0]._id;
    ///uuu = data
    query = data
  });









/**** 
const Blogs = () => {
  return <h1>{uuu}</h1>; ////Just displays a Single Structures ID which was sent by server
};

export default Blogs;
****/






/*
//////////THE CODE BELOW IS A WIP OF DISPLAYING ONE STRUCTURES ENTERIES ON THE SCREEN
//////////////////////////This sends
let oneEnt = "aswdss"; //let
console.log(oneEnt);
//const data = { test: "asdw" };

  fetch("http://localhost:9090/oneEntry", {
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
    oneEnt = data.data;////
    //return <h1>{data.data}</h1>;
  });
  console.log("2");
  console.log(uuu);////

if(oneEnt.valueOf() == "aswdss".valueOf()) {
  fetch("http://localhost:9090/oneEntry", {
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
    oneEnt = data.data;////
    //return <h1>{data.data}</h1>;
  });
}
*/

/*
//<img src={query[i].images[0]} alt="Alternative Text" />
const Elements = () => {
  let content = []
  let num = query.length;
  for (let i = 0; i < num; i++) {
      content.push(
          <Element>
              <h1>{query[i]._id}</h1>
              <img src={query[i].images[0]} alt="Alternative Text" />
              <p><a href="https://www.cat.com/en_US.html">{"House Construction Group"}</a></p>
              <p><a href="https://www.cat.com/en_US.html">{query[i][1]}</a></p>
          </Element>
      );
  }
  return content;
}
//In Results --> {Elements()}
*/ 
const Blogs = () => {
  return (
      <div>
          <Tags>
              <h1>Tag 1</h1>
              <h1>Tag 2</h1>
          </Tags>
          <Results>
              
          </Results>
      </div>
  );
};

export default Blogs;
