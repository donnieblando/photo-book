import React from 'react';

import LayoutPage from '../LayoutPage/LayoutPage';
import Module from '../../components/Module';
import PhotoFrame from '../../components/PhotoFrame';

import { PROJECTS } from '../../data/data';

const buildRowClassname = (size => {
  if (size === 1)
    return ''
})

const buildRow = (mRow, rowKey) => {
  const size = mRow.length;
  console.log('size', mRow)

  let moduleCls = '';
  if (size === 1)
    moduleCls = 'col-12';
  else if (size === 2)
    moduleCls = 'col-12 col-md-6';
  else if (size === 3)
    moduleCls = 'col-12 col-md-4';
  else if (size === 4)
    moduleCls = 'col-12 col-md-3';

  const columns = mRow.map(((mCol, key) => buildCol(mCol, moduleCls, key)))

  console.log('columns', columns)

  const result = (
    <div className="row no-gutters mt-2" key={rowKey}>
      {columns}
    </div>
  )
  return result;
}

const buildCol = (fileName, moduleCls, key) => {
  const vertical = (fileName && fileName.charAt(0) === 'V');
  const column = (
    <Module cls={moduleCls} key={key}>
      {fileName ? 
        (<PhotoFrame photoBaseName={fileName} vertical={vertical} />)
        : null
      }    
    </Module>
  );
  return column;
}

const ProjectDetailPage = props => {

  const projectName = props.match.params.project;
  const project = PROJECTS[projectName.toUpperCase()];
  const matrix = project.photos

  const result = matrix.map((mRow, key) => buildRow(mRow, key));

  if (project) {
    console.log('result', result);
  }


  return (
    <LayoutPage>
      <h2>ProjectDetail Page - Selected the project {props.match.params.project}</h2>
      {result}
    </LayoutPage>
  );
}

export default ProjectDetailPage;