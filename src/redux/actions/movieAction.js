import Types from "~/redux/types/index";

export const handleSearch = e => {
  return dispatch => {
    dispatch({
      type: Types.HANDLE_SEARCH,
      payload: {
        searchValue: e.target.value
      }
    });
  };
};
