import Types from "~/redux/types/index";
const init = {
  searchValue: ""
};

const movieReducer = (state = init, action) => {
  switch (action.type) {
    case Types.HANDLE_SEARCH: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
export default movieReducer;
