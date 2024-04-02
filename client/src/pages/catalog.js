import React, { useState, useEffect } from "react";
import { CatalogPage, Tags, Results, Element } from "./catalogElements";

const Catalog = () => {
  const initialMyArray = JSON.parse(localStorage.getItem("myArray")) || ['a', 'b', 'c', 'd', 'e'];
  const [myArray, setMyArray] = useState(initialMyArray);
  const [query, setQuery] = useState([]);
  const [counter, setCounter] = useState(parseInt(localStorage.getItem("counter")) || 0);
  const [arrayChanged, setArrayChanged] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9090/catalog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ test: "asdw" }),
    })
      .then((response) => response.json())
      .then((data) => {
        setQuery(data);
      });
  }, []);

  const handleClick = () => {
    if (arrayChanged) {
      setMyArray(initialMyArray);
    } else {
      setMyArray(['f', 'g', 'h', 'i', 'j']);
    }
    setCounter(prevCounter => prevCounter + 1);
    setArrayChanged(!arrayChanged);
  };

  const handleClear = () => {
    localStorage.removeItem("myArray");
    localStorage.removeItem("counter");
    setMyArray(['a', 'b', 'c', 'd', 'e']); // Set array back to initial value
    setCounter(0);
    setArrayChanged(false);
  };

  useEffect(() => {
    localStorage.setItem("myArray", JSON.stringify(myArray));
  }, [myArray]);

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  const renderElements = () => {
    return query.map((item) => (
      <Element key={item._id}>
        <h1>{item._id}</h1>
        <img src={item.images[0]} alt="Alternative Text" />
        <p>
          <a href="https://www.cat.com/en_US.html">House Construction Group</a>
        </p>
        <p>
          <a href="https://www.cat.com/en_US.html">{item[1]}</a>
        </p>
      </Element>
    ));
  };

  function ColorChangingButton() {
    const initialColor = localStorage.getItem('buttonColor') || '#007bff';
    const [buttonColor, setButtonColor] = useState(initialColor);

    const getRandomColor = () => {
      return '#' + Math.floor(Math.random()*16777215).toString(16);
    };

    const handleClick = () => {
      const randomColor = getRandomColor();
      setButtonColor(randomColor);
    };

    useEffect(() => {
      localStorage.setItem('buttonColor', buttonColor);
    }, [buttonColor]);

    return (
      <button
        style={{ backgroundColor: buttonColor, color: '#ffffff' }}
        onClick={handleClick}
      >
        {myArray.length > 0 ? JSON.stringify(myArray) : 'No Array'}
      </button>
    );
  }

  return (
    <CatalogPage>
      <Tags>
        <ColorChangingButton />
        <button onClick={handleClick}>Change Array</button>
        <button onClick={handleClear}>Clear Storage</button>
        <div>Counter: {counter}</div>
      </Tags>
      <Results>
        {renderElements()}
        {myArray.map((item) => (
          <Element key={item}>{item}</Element>
        ))}
      </Results>
    </CatalogPage>
  );
};

export default Catalog;
