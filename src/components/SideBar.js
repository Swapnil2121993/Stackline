import React from 'react';
import ProductDetail from './ProductDetail';
import SideBarMenu from './SideBarMenu';
import './SideBar.less';

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <ProductDetail />
      <SideBarMenu />
    </div>
  );
};

export default SideBar;
