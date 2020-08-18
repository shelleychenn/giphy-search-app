import React, { useState } from 'react';
import apiHelpers from '../helpers/apiHelpers';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { gifs: state.gifsDisplay };
};

const Display = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(props.gifs);

  return (
    <>
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
    </>
  );
};

export default connect(mapStateToProps)(Display);
