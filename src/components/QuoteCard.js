import React from "react";
import "./QuoteCard.css";

function QuoteCard({simpsonCard}) {
  return (
    <figure className="QuoteCard">
      <img src={simpsonCard.image} alt={simpsonCard.character} />
      <figcaption>
        <blockquote>{simpsonCard.quote}</blockquote>
        <cite>{simpsonCard.character}</cite>
      </figcaption>
    </figure>
  );
}

//QuoteCard.PropTypes = {
//  character: PropTypes.string.isRequired,
//  image: PropTypes.string.isRequired,
// };

export default QuoteCard;
