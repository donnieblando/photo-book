import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoResponsive from '../PhotoResponsive';
import { getRandomDelay } from '../../utils/photoRootUtil';

import './_PhotoFrame.scss';

class PhotoFrame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  render() {

    const photoResp = (
      <PhotoResponsive 
        baseName={this.props.photoBaseName}
        vertical={this.props.vertical}
      />
    )
    
    const orientationCls = this.props.vertical ? 'vertical' : 'horizontal';
    const result = photoResp;
  
    return (
      <div className={`photo-frame ${orientationCls}`}>
        {result}
      </div>
    );
  }
  
}

PhotoFrame.propTypes = {
  photoBaseName: PropTypes.string.isRequired,
  vertical: PropTypes.bool
};

export default PhotoFrame;