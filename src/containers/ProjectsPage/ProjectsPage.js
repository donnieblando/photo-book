import React from 'react';

const ProjectsPage = props => {
  return (
    <h2>Projects Page - Selected the project {props.match.params.project}</h2>
  );
}

export default ProjectsPage;