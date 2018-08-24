import * as constants from './constants';
import products from '../data';
import { getRandomColor } from '../utils';

const reduceData = data => data.reduce((previousValue, newValue) => {
  const newData = {
    name: newValue.name,
    color: getRandomColor(),
    data: [[newValue.feature1, newValue.feature2]],
  };
  const existingData = previousValue[newValue.year];
  if (existingData) {
    return {
      ...previousValue,
      [newValue.year]: [...existingData, newData],
    };
  }

  return {
    ...previousValue,
    [newValue.year]: [newData],
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
