import * as constants from './constants';



const initialState = {
  data: [],
  year: 2016,
};

export default (state = initialState, action) => {
  if (action.type === constants.SET_YEAR) {
    return {
      ...state,
      year: action.year,
    }
  }
  return state;
};