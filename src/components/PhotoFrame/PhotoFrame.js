import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './_PhotoFrame.scss';

import Photo from '../Photo';

const PhotoFrame = props => {

  return (
    <div className="photo-frame">
      <Photo 
        baseName={props.photoBaseName}
      />      
    </div>
  );
  
}

PhotoFrame.propTypes = {
  photoBaseName: PropTypes.string.isRequired
};

export default PhotoFrame;