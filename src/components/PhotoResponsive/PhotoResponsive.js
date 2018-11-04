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

  /**
   * <img
        srcSet={srcSet}
        sizes="(max-width: 849px) 500w,
               (min-width: 850px) and (max-width: 1199px) 800w,
               (min-width: 1200px) 1100w"
      />
   */

  return (
    <React.Fragment>
      <img
        onClick={props.onClick}
        srcSet="/photos/sizes/large/DSC_2804-1-1200w.jpg 1200w,
                /photos/sizes/medium/DSC_2804-1-800w.jpg 800w,
                /photos/sizes/small/DSC_2804-1-480w.jpg 480w"
        sizes="(maxWidth: 849px) 500w,
        (minWidth: 850px) and (maxWwidth: 1199px) 800w,
        1100w"
      />
     
    </React.Fragment>
  );
  
}

PhotoResponsive.propTypes = {
  baseName: PropTypes.string
};

export default PhotoResponsive;