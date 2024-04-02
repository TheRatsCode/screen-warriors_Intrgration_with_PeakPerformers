import React from "react";
import {useState, useEffect} from 'react';
//import { CatalogPage, Tags, Results, Element } from "./catalogElements";
import { CatalogPage, Tags, Results, Element} from "./catalogElements";
//import  ColorChangingButton from "./buttonTest";, CatalogButton
/*
const query = [
    ["House 1", "Construction Group 1"],
    ["House 2", "Construction Group 2"],
    ["House 3", "Construction Group 3"],
    ["House 4", "Construction Group 4"],
    ["House 5", "Construction Group 5"]
]

const Elements = () => {
    let content = [];
    let num = query.length;
    for (let i = 0; i < num; i++) {
        content.push(
            <Element>
                <h1>{query[i][0]}</h1>
                <img src="https://www.bradley.edu/asset/img/bradleyHall.svg" alt="Alternative Text" />
                <p><a href="https://www.cat.com/en_US.html">{query[i][1]}</a></p>
            </Element>
        );
    }
    return content;
}

const Catalog = () => {
    return (
        <CatalogPage>
            <Tags>
                <h1>Tag 1</h1>
                <h1>Tag 2</h1>
            </Tags>
            <Results>
                {Elements()}
            </Results>
        </CatalogPage>
    );
};

export default Catalog;
*/







/*
/////////////MY BABY
//
let query = []

console.log(query);
const data = { test: "asdw" };

  fetch("http://localhost:9090/catalog", {
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




*/
/*
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
*/



/*
  function ColorChangingButton() {
    // Define state to store the button color
    const [buttonColor, setButtonColor] = useState('#007bff');
  
    // Function to generate a random color
    const getRandomColor = () => {
      return '#' + Math.floor(Math.random()*16777215).toString(16);
    };
  
    // Event handler for button click
    const handleClick = () => {
      const randomColor = getRandomColor();
      setButtonColor(randomColor); // Update button color
    };
  
    return (
      <div>
      <button
        style={{ backgroundColor: buttonColor, color: '#ffffff' }}
        onClick={handleClick}
      >
        Change Color
      </button>
      </div>
    );
  }
  */
/*
  function ColorChangingButton() {
    // Retrieve color from local storage, default to #007bff if not found
    const initialColor = localStorage.getItem('buttonColor') || '#007bff';
    const [buttonColor, setButtonColor] = useState(initialColor);
  
    // Function to generate a random color
    const getRandomColor = () => {
      return '#' + Math.floor(Math.random()*16777215).toString(16);
    };
  
    // Event handler for button click
    const handleClick = () => {
      const randomColor = getRandomColor();
      setButtonColor(randomColor); // Update button color
    };
  
    // Save color to local storage whenever it changes
    useEffect(() => {
      localStorage.setItem('buttonColor', buttonColor);
    }, [buttonColor]);
  
    return (
      <button
        style={{ backgroundColor: buttonColor, color: '#ffffff' }}
        onClick={handleClick}
      >
        Change Color
      </button>
    );
  }





  const Catalog = () => {
    return (
        <CatalogPage>
            <Tags>
                <h1>Tag 1</h1>
                <h1>Tag 2</h1>
                {ColorChangingButton()}
            </Tags>
            
            <Results>
                {Elements()}
            </Results>
        </CatalogPage>
    );
};

export default Catalog;
*/



/*
const Catalog = () => {
    return (
        <CatalogPage>
            <Tags>
                <h1>Tag 1</h1>
                <h1>Tag 2</h1>
                <ColorChangingButton></ColorChangingButton>
            </Tags>
            
            <Results>
                {Elements()}
            </Results>
        </CatalogPage>
    );
};

export default Catalog;
*/










/////////////////MESSIN ARODUND WITH JOSHS CODE
/*
//let query = []
////EVERYTHING IS COOL AND EVERYTHING BELOW IS JOSHES
const Catalog = () => {
    const [uuu, setUUU] = useState("AAAA");
    const data = { test: "BBBB" };
        ///let uuu = "aswdss";
        //let auau = {iids: "Holder"};

    fetch("http://localhost:9090/catalog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        //console.log("HALP")
        console.log(data);
        setUUU(data[0]._id);////
        //return <h1>{data.data}</h1>;
    });

    const [numElements, setCount] = useState(query.length);
    const Func = () => {
        setCount(numElements + 1);
    }
    return (
        <CatalogPage>
            <Tags>
            <h1><Link onClick={() => {Func()}}>Tag 1</Link></h1>
                <h1><Link onClick={() => {Func()}}>Tag 2</Link></h1>
            </Tags>
            <Results>
                {Elements()}
            </Results>
            <div>
                <p>Results Displayed: {numElements}</p>
                <p>{uuu}</p>
            </div>
        </CatalogPage>
    );
}

export default Catalog; */

let query = []
console.log(query);
const data = { test: "asdw" };

  fetch("http://localhost:9090/catalog", {
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





  const Catalog = () => {
    const [uuu, setUUU] = useState("AAAA");
    const data = { test: "BBBB" };
        ///let uuu = "aswdss";
        //let auau = {iids: "Holder"};
        //const [query, setQuery] = useState("CCCC"); //maybe try let

    fetch("http://localhost:9090/catalog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        //console.log("HALP")
        console.log(data);
        setUUU(data[0]);////setUUU(data[0]._id);
        //return <h1>{data.data}</h1>;
        //setQuery(data);
    });

    const [numElements, setCount] = useState(query.length);
    const Func = () => {
        setCount(numElements + 1);
    }

    function ColorChangingButton() {
        // Retrieve color from local storage, default to #007bff if not found
        const initialColor = localStorage.getItem('buttonColor') || '#007bff';
        const [buttonColor, setButtonColor] = useState(initialColor);
      
        // Function to generate a random color
        const getRandomColor = () => {
          return '#' + Math.floor(Math.random()*16777215).toString(16);
        };
      
        // Event handler for button click
        const handleClick = () => {
          const randomColor = getRandomColor();
          Func();
          setButtonColor(randomColor); // Update button color

          //Try to send query with getting element Id with 1??
          fetch("http://localhost:9090/catalog/1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        //console.log("HALP")
        console.log(data);
        setUUU(data[0]._id);////setUUU(data[0]._id);
        //return <h1>{data.data}</h1>;
        //setQuery(data);
    });
    //window.location.reload()
        };
      
        // Save color to local storage whenever it changes
        useEffect(() => {
          localStorage.setItem('buttonColor', buttonColor);
        }, [buttonColor]);
      
        return (
          <button
            style={{ backgroundColor: buttonColor, color: '#ffffff' }}
            onClick={handleClick}
          >
            Change Color
          </button>
        );
      }
    return (
        <CatalogPage>
            <Tags>
            <h1>Tag 1</h1>
                <h1>Tag 2</h1>
                {ColorChangingButton()}
            </Tags>
            <Results>
                {Elements()}
            </Results>
            
        </CatalogPage>
    );
}

export default Catalog;
