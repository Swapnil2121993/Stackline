import React, { useEffect } from 'react';
import PropType from 'prop-types';
import ContentContainer from '../container/ContentContainer';
import './SalesTable.less';

const tableColumnTitle = [
  'Week Ending',
  'Retail Sales',
  'WholesaleSales',
  'Units Sold',
  'Retailer Margin',
];
const renderTableHeader = () => {
  return (
    <thead>
      <tr className="header-row">
        {tableColumnTitle.map((title, index) => (
          <th key={index} className="header-data">
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const renderTableBody = tableData => {
  return (
    <tbody>
      {tableData.map((productData, index) =>
        productData.sales.map((category, index) => (
          <tr key={index} className="body-row">
            <td className="header-data">{category.weekEnding}</td>
            <td className="header-data">{'$' + category.retailSales}</td>
            <td className="header-data">{'$' + category.wholesaleSales}</td>
            <td className="header-data">{category.unitsSold}</td>
            <td className="header-data">{'$' + category.retailerMargin}</td>
          </tr>
        ))
      )}
    </tbody>
  );
};

const SalesTable = ({ productData, requestApiData }) => {
  useEffect(() => {
    requestApiData();
  }, []);
  return (
    <div className="table-container">
      <table className="sales-table">
        {productData.length ? renderTableHeader() : null}
        {productData.length ? renderTableBody(productData) : null}
      </table>
    </div>
  );
};

SalesTable.propTypes = {
  productData: PropType.object,
  requestApiData: PropType.func,
};

export default ContentContainer(SalesTable);
