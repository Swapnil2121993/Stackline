import React, { useEffect, Fragment } from 'react';
import PropType from 'prop-types';
import ContentContainer from '../container/ContentContainer';
import './ProductDetail.less';

const getProductTags = productTag => {
  return productTag.map((tag, index) => <span key={index}>{tag}</span>);
};

const ProductDetail = ({ productData, requestApiData }) => {
  useEffect(() => {
    requestApiData();
  }, []);

  return (
    <div>
      {productData.length
        ? productData.map((product, index) => {
            return (
              <div key={index} className="product-detail">
                <div className="product-image">
                  <img src={product.image} alt="slack-ninja" />
                </div>
                <h2 className="product-title">{product.title}</h2>
                <h4 className="product-subtitle">{product.subtitle}</h4>
                <hr />
                <div className="product-tags">
                  {getProductTags(product.tags)}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

ProductDetail.propTypes = {
  productData: PropType.object,
  requestApiData: PropType.function,
};

export default ContentContainer(ProductDetail);
