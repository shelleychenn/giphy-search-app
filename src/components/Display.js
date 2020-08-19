import React, { useState } from 'react';
import apiHelpers from '../helpers/apiHelpers';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { gifs: state.gifsDisplay };
};

const Display = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            props.dispatch(apiHelpers.getGifs(searchTerm));
          }}
        >
          search
        </button>
      </div>

      <div className="giphy-display">
        {props.gifs.map((gif) => (
          <img
            src={gif.images.original.url}
            alt={gif.title}
            key={gif.id}
            height="250px"
          />
        ))}
      </div>
    </>
  );
};

export default connect(mapStateToProps)(Display);
