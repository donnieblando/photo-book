import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './_PhotoFrame.scss';

import PhotoResponsive from '../PhotoResponsive';

const PhotoFrame = props => {

  const orientationCls = props.vertical ? 'vertical' : 'horizontal';

  return (
    <div className={`photo-frame ${orientationCls}`}>
      <PhotoResponsive 
        baseName={props.photoBaseName}
        vertical={props.vertical}
      />
    </div>
  );
  
}

PhotoFrame.propTypes = {
  photoBaseName: PropTypes.string.isRequired,
  vertical: PropTypes.bool
};

export default PhotoFrame;