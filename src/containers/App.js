import React, { useState } from "react";
import emojiList from "../assets/emojiList.json";
import Search from "../components/Search";
import Emoji from "../components/Emoji";
import "../containers/App.css";

const App = () => {
  const [results, setResults] = useState(emojiList.slice(0, 20));

  // fonction qui va être appelée à chaque changement dans l'input
  const searchResult = (event) => {
    let newResults = [];
    for (let i = 0; i < emojiList.length; i++) {
      if (
        emojiList[i].keywords.indexOf(event.target.value.toLowerCase()) !== -1
      ) {
        if (newResults.length >= 20) {
          break;
        } else {
          newResults.push(emojiList[i]);
        }
      }
    }
    setResults(newResults);
  };

  return (
    <div className="container">
      <Search searchResult={searchResult} />
      {
        // la méthode map va retourner autant de composants Line qu'il y a d'élément dans le tableau results
        results.map((emoji, index) => {
          return <Emoji key={index} emoji={emoji} />;
        })
      }
    </div>
  );
};

export default App;
