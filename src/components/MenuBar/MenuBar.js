import React from 'react';
import PropTypes from 'prop-types';

import './_MenuBar.scss';

import MenuItem from './MenuItem';

import { MENU_ITEMS } from '../../data/content';

const generateMenuBar = () => {
  return MENU_ITEMS.map((item, key) =>
    <MenuItem
      key={key}
      path={item.path}
      label={item.label}
    />
  );
}

const MenuBar = () => {

  return (
    <div className="menu-bar">
      {generateMenuBar()}
    </div>
  );

}

MenuBar.propTypes = {

}

export default MenuBar;