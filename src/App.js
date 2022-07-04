import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0)

  function checkNumber(number) {
    if(number > data.length -1) {
      return 0
    }else
    if (number < 0) {
      return data.length -1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex)

    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(checkNumber(index+1));
    }, 2000);
    // return () => clearTimeout(timer);
  });


  const { id, image, name, title, quote } = data[index];
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>
            reviews
          </h2>
        </div>
        <div className="section-center">
          <article>
            <img src={image} alt="name" className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
          <button className="prev" onClick={prevPerson}>
            <FiChevronLeft />
          </button>
          <button className="next">
            <FiChevronRight onClick={nextPerson}/>
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
