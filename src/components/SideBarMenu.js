import React from 'react';
import './SideBarMenu.less';

const SideBarMenu = () => {
  return (
    <div className="sidebar-menu">
      <div className="menu-item">
        <div className="item-1">
          <img
            src={require('../../home-icon.png').default}
            alt="overview-icon"
          />
          <h3>Overview</h3>
        </div>
        <div className="item-2">
          <img
            src={require('../../sales-chart.png').default}
            alt="sales-graph"
          />
          <h3>Sales</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
