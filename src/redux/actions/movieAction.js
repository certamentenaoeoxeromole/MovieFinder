import Types from "~/redux/types/index";

export const handleSearch = e => ({
  type: Types.HANDLE_SEARCH,
  payload: {
    searchValue: e.target.value
  }
});

export const getApiGenres = () => ({
  type: Types.REQUEST_GENRE_API
});

export const getApiMovie = id => ({
  type: Types.REQUEST_MOVIE_API,
  payload: { id }
});

export const setPagination = page => ({
  type: Types.SET_PAGINATION,
  payload: {
    currentPagination: page
  }
});
