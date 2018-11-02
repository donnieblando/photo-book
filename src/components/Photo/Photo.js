import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IMG_EXTENSIONS } from '../../utils/constants';

import { buildSrcSet } from '../../utils/photoRootUtil';

const Photo = props => {

  const srcSet = buildSrcSet(
    props.baseName,
    IMG_EXTENSIONS.JPG,
    [480, 1200, 800]
  );

  console.log('srcset', srcSet);

  return (
    <img
        srcSet={srcSet}
        sizes="(min-width: 850px) and (max-width: 1199px) 800w,
               (max-width: 849px) 500w,
               (min-width: 1200px) 1100w"
      />
  );
  
}

Photo.propTypes = {
  baseName: PropTypes.string
};

export default Photo;