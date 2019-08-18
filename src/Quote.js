import React from "react";
import PropTypes from "prop-types";

function Quote({ img, name, quote }) {
  return (
    <div>
      <img src={img} alt={name} title={name}/>
      <h1>{name}</h1>
      <h4>{quote}</h4>
    </div>
  );
}

Quote.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
}

export default Quote
