import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IMG_EXTENSIONS } from '../../utils/constants';

import { buildSrcSet } from '../../utils/photoRootUtil';

const PhotoResponsive = props => {

  const srcSet = buildSrcSet(
    props.baseName,
    IMG_EXTENSIONS.JPG,
    [480, 1200, 800]
  );

  console.log('PhotoResponsive', srcSet);

  return (
    <img
        srcSet={srcSet}
        sizes="(max-width: 849px) 500w,
               (min-width: 850px) and (max-width: 1199px) 800w,
               (min-width: 1200px) 1100w"
      />
  );
  
}

PhotoResponsive.propTypes = {
  baseName: PropTypes.string
};

export default PhotoResponsive;