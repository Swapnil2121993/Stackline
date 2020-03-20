import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import SalesTable from './SalesTable';

const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <SideBar />
      <SalesTable />
    </div>
  );
};

export default Main;
