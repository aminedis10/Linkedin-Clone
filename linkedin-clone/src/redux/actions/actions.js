import * as actions from "./actionTypes";

export const setUser = (payload) => {
  //to save user in state
  return {
    type: actions.SET_USER,
    user: payload,
  };
};

export const setLoading = (status) => {
  return {
    type: actions.SET_LOADING_STATUS,
    status: status,
  };
};

export const getArticles = (payload) => {
  //to save user in state
  return {
    type: actions.GET_ARTICLES,
    payload: payload,
  };
};
