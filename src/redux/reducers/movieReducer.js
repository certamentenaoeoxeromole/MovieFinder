import Types from "~/redux/types/index";
const init = {
  searchValue: "",
  movies: null,
  error: false,
  requestSearchLoad: false,
  genres: null,
  currentMovie: null,
  pagination: null
};

const movieReducer = (state = init, action) => {
  switch (action.type) {
    case Types.HANDLE_SEARCH: {
      return { ...state, ...action.payload };
    }
    case Types.REQUEST_SEACH_API: {
      return { ...state, requestSearchLoad: true };
    }
    case Types.SUCESS_SEARCH_API: {
      return { ...state, ...action.payload, requestSearchLoad: false };
    }
    case Types.ERROR_SEARCH_API: {
      return { ...state, ...action.payload };
    }
    case Types.SUCESS_GENRES_API: {
      return { ...state, ...action.payload };
    }
    case Types.SUCESS_MOVIE_API: {
      return { ...state, ...action.payload };
    }
    case Types.SET_PAGINATION: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPagination: action.payload.currentPagination
        }
      };
    }
    default:
      return state;
  }
};
export default movieReducer;
