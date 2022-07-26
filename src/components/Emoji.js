import React, { useState } from "react";

const Emoji = ({ emoji }) => {
  const [hoverLine, setHoverLine] = useState(false);

  return (
    <div
      // https://fr.reactjs.org/docs/events.html#mouse-events
      onMouseEnter={() => setHoverLine(true)}
      onMouseLeave={() => setHoverLine(false)}
      onClick={() => {
        navigator.clipboard.writeText(emoji.symbol);
        // https://stackoverflow.com/a/52033479
      }}
      className="line"
    >
      <span>
        {emoji.symbol} {emoji.title}
      </span>
      {hoverLine && <span className="copy-span">Click to copy !</span>}
    </div>
  );
};

export default Emoji;
