import React from 'react';

import Module from '../components/Module';
import PhotoFrame from '../components/PhotoFrame';

function isVerticalOriented(fileName) {
  return fileName && fileName.length && fileName.charAt(0).toUpperCase() === 'V';
}

const buildRows = (matrix) => {
  return matrix.map((mRow, key) => buildRow(mRow, key));
}

const buildRow = (mRow, rowKey) => {
  const size = mRow.length;
  let moduleCls = 'col-12';
  switch (size) {
    case 1:
      moduleCls = moduleCls.concat(' col-12');
      break;
    case 2:
      moduleCls = moduleCls.concat(' col-md-6');
      break;
    case 3:
      moduleCls = moduleCls.concat(' col-md-4');
      break;
    case 4:
      moduleCls = moduleCls.concat(' col-md-3');
      break;
    default:
      moduleCls = moduleCls.concat(' col-md-6');
      break;
  }
  
  const columns = mRow.map(((mCol, key) => buildCol(mCol, moduleCls, key)))
  return (
    <div className="row no-gutters mt-2" key={rowKey}>
      {columns}
    </div>
  );
}

const buildCol = (fileName, moduleCls, key) => {
  const isVertical = isVerticalOriented(fileName);
  return (
    <Module cls={moduleCls} key={key}>
      {fileName ? (<PhotoFrame photoBaseName={fileName} vertical={isVertical} />) : null}
    </Module>
  );
}

export {
  buildRows,
  isVerticalOriented
};