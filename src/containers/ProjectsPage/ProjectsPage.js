import React from 'react';

import LayoutPage from '../LayoutPage/LayoutPage';

const ProjectsPage = props => {
  return (
    <LayoutPage>
      <h2>Projects Page - Selected the project {props.match.params.project}</h2>
    </LayoutPage>
  );
}

export default ProjectsPage;