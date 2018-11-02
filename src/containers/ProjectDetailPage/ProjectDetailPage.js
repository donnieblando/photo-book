import React from 'react';

import LayoutPage from '../LayoutPage/LayoutPage';
import PhotoFrame from '../../components/PhotoFrame';

const ProjectDetailPage = props => {
  console.log('ProjectDetailPage')
  return (
    <LayoutPage>
      <h2>ProjectDetail Page - Selected the project {props.match.params.project}</h2>

      <PhotoFrame photoBaseName="DSC_2804-1" />

    </LayoutPage>
  );
}

export default ProjectDetailPage;