import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Body from '../../components/Body';
import Footer from '../../components/Footer';
import MenuBar from '../../components/MenuBar';

const LayoutPage = props => {

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>DONNIE BLANDO PHOTOGRAPHER</h1>
      </header> */}
      <MenuBar />
      <Body>
        {props.children}
      </Body>
      <Footer />
    </div>
  );
  
}

LayoutPage.propTypes = {

};

export default LayoutPage;