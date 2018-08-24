import * as constants from './constants';

export const setYear = year => ({
  type: constants.SET_YEAR,
  year,
});

export const setType = displayType => ({
  type: constants.SET_TYPE,
  displayType,
});
