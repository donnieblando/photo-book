import React from 'react';
import PropTypes from 'prop-types';

import { IMG_EXTENSIONS } from '../../utils/constants';
import { buildSrcSet, buildSrcSetGeneric } from '../../utils/photoRootUtil';
import { isVerticalOriented } from '../../utils/modular';

const PhotoResponsive = props => {

  if (!props.baseName) {
    return null;
  }

  let fileName = props.baseName;
  let isVertical = props.vertical || isVerticalOriented(fileName);

  let orientationCls = 'horizontal';
  if (isVertical) {
    orientationCls = 'vertical';
    if (isVerticalOriented(fileName)) {
      fileName = fileName.substring(1);
    }
  }

  let srcSet = '';
  if (fileName) {
    srcSet = isVertical ?
      buildSrcSet(
        fileName,
        IMG_EXTENSIONS.JPG,
        [400, 600, 800]
      ) :
      buildSrcSet(
        fileName,
        IMG_EXTENSIONS.JPG,
        [1024, 640, 320]
      );
  }

  /**
   * <img
        srcSet={srcSet}
        sizes="(max-width: 849px) 500w,
               (min-width: 850px) and (max-width: 1199px) 800w,
               (min-width: 1200px) 1100w"
      />
   */

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