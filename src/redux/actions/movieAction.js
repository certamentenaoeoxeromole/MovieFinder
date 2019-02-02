import Types from "~/redux/types/index";
import api from "~/services/api";

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
