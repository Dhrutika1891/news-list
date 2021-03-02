export const initialState = {
  status: "LOADING",
};

export const setStatus = (status) => ({
  type: "set-status",
  status,
});

export const reducerForNews = (state = initialState, action) => {
  switch (action.type) {
    case "set-status":
      return {
        ...state,
        status: action.status,
      };
    case "set-news":
      return {
        ...state,
        newsPageData: action.newsPageData,
      };
    default:
      return state;
  }
};

export default reducerForNews;
