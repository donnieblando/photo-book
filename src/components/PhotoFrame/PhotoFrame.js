import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './_PhotoFrame.scss';

import PhotoResponsive from '../PhotoResponsive';

const PhotoFrame = props => {

  return (
    <div className="photo-frame">
      <PhotoResponsive 
        baseName={props.photoBaseName}
      />
    </div>
  );
  
}

PhotoFrame.propTypes = {
  photoBaseName: PropTypes.string.isRequired
};

export default PhotoFrame;