import Types from "~/redux/types/index";
const init = {
  searchValue: "",
  movies: null,
  error: false,
  loading: false
};

const movieReducer = (state = init, action) => {
  switch (action.type) {
    case Types.HANDLE_SEARCH: {
      return { ...state, ...action.payload };
    }
    case Types.REQUEST_API_DATA: {
      return { ...state, loading: true };
    }
    case Types.SUCESS_SEARCH_API: {
      return { ...state, ...action.payload };
    }
    case Types.ERROR_SEARCH_API: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
export default movieReducer;
