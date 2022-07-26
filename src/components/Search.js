import React from "react";

const Search = ({ searchResult }) => {
  return (
    <div className="header">
      <span>😎 EmojiSearch 😎</span>
      <input
        onChange={(event) => searchResult(event)}
        placeholder="What emoji are you looking for ?"
      />
    </div>
  );
};

export default Search;
