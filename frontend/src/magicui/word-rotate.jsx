// src/magicui/word-rotate.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const WordRotate = ({ words, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every second

    return () => clearInterval(intervalId);
  }, [words.length]);

  return <span className={className}>{words[index]}</span>;
};

WordRotate.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default WordRotate;
