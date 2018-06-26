import { SET_PRIMARY_COLOR } from '../actions/themes';

const initialState = {
  primaryColor: '#4F6D7A'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.color
      };
    default:
      return state;
  }
};

export default reducer;
