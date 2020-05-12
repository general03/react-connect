import { ADD_DRAGON } from './actions-types';

export const addDragon = (newDragon) => {
  return function (dispatch) {
    dispatch({
      type: ADD_DRAGON,
      payload: newDragon
    })
  }
}