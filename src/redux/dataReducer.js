import * as constants from './constants';
import products from '../data';

const reduceData = data => data.reduce((previousValue, newValue) => {
  const existingData = previousValue[newValue.year];
  if (existingData) {
    return {
      ...previousValue,
      [newValue.year]: [...existingData, newValue],
    };
  }

  return {
    ...previousValue,
    [newValue.year]: [newValue],
  };
}, {});

const data = reduceData(products);

const initialState = {
  data,
  year: 2016,
  displayType: 'Goods',
};


export default (state = initialState, action) => {
  if (action.type === constants.SET_YEAR) {
    return {
      ...state,
      year: action.year,
    };
  } if (action.type === constants.SET_TYPE) {
    return {
      ...state,
      displayType: action.displayType,
    };
  }
  return state;
};
