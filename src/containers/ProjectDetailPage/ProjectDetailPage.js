import React from 'react';

import LayoutPage from '../LayoutPage/LayoutPage';
import Module from '../../components/Module';
import PhotoFrame from '../../components/PhotoFrame';

const ProjectDetailPage = props => {
  console.log('ProjectDetailPage')
  return (
    <LayoutPage>
      <h2>ProjectDetail Page - Selected the project {props.match.params.project}</h2>
      
      
      <div className="row no-gutters mt-2">
        
        <div className="col-12 col-md-6">
          <Module>
            <PhotoFrame photoBaseName="DSC_2804-1" />
          </Module>
        </div>

        <div className="col-12 col-md-6">

          <Module>
            <PhotoFrame photoBaseName="DSC_2804-1" />
          </Module>
          </div>
          <div className="col-12 col-md-6">
          <Module>
            <PhotoFrame photoBaseName="DSC_2804-1" />
          </Module>
          </div>
          <div className="col-12 col-md-6">
          <Module>
            <PhotoFrame photoBaseName="DSC_6078" vertical />
          </Module>
        </div>
          <div className="col-12 col-md-6">
          <Module>
            <PhotoFrame photoBaseName="DSC_2804-1" />
          </Module>
          </div>
          
      </div>



    </LayoutPage>
  );
}

export default ProjectDetailPage;