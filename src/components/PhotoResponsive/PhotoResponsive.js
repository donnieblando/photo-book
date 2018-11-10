import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IMG_EXTENSIONS } from '../../utils/constants';
import { buildSrcSet } from '../../utils/photoRootUtil';

const PhotoResponsive = props => {

  const srcSet = props.vertical ?
    buildSrcSet(
      props.baseName,
      IMG_EXTENSIONS.JPG,
      [800, 533, 319]
    ) :
    buildSrcSet(
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

  const orientationCls = props.vertical ? 'vertical' : 'horizontal';

  return (
    <img
      className={orientationCls}
      onClick={props.onClick}
      srcSet={srcSet}
      sizes="(maxWidth: 849px) 500w,
            (minWidth: 850px) and (maxWwidth: 1199px) 800w,
            1100w"
    />
  );
}

PhotoResponsive.propTypes = {
  baseName: PropTypes.string,
  vertical: PropTypes.bool
};

export default PhotoResponsive;