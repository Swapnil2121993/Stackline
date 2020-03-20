import { connect } from 'react-redux';
import { requestApiData } from '../actions';

const mapStateToProps = state => {
  return {
    productData: state.data,
  };
};

const mapDispatchToProps = dispatch => {
  return { requestApiData: () => dispatch(requestApiData()) };
};

const ContentContainer = component => {
  return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default ContentContainer;
