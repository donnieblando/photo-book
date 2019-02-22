import React from 'react';
import LayoutPage from '../LayoutPage/LayoutPage';
import { PROJECTS } from '../../data/data';
import { buildRows } from '../../utils/modular';

const ProjectDetailPage = props => {

  const projectName = props.match.params.project;
  const project = PROJECTS[projectName.toUpperCase()];
  const matrix = project.photos

  const rows = buildRows(matrix);
  

  return (
    <LayoutPage>
      <h2>ProjectDetail Page - Selected the project {props.match.params.project}</h2>
      {rows}
    </LayoutPage>
  );
}

export default ProjectDetailPage;