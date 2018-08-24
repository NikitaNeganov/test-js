import * as constants from './constants';

const initialState = {
  data: [],
  year: 2016,
  displayType: 'Goods',
};


export default (state = initialState, action) => {
  if (action.type === constants.SET_YEAR) {
    return {
      ...state,
      year: action.year,
    };
  } else if (action.type === constants.SET_TYPE) {
    return {
      ...state,
      displayType: action.displayType,
    };
  } 
  return state;
};
