import * as actions from "../actions/actionTypes";

export const initialState = {
  loading: false,
  atricles: [],
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    case actions.GET_ARTICLES:
      return {
        ...state,
        atricles: action.payload,
      };

    default:
      return state;
  }
};
export default articlesReducer;
