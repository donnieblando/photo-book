import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Body = (props) => {

  return (
    <div className="body">
      <div className="container">
        {props.children}
      </div>
    </div>
  );
  
}

Body.propTypes = {

};

export default Body;