import Types from "~/redux/types/index";
import api from "~/services/api";
import { red } from "ansi-colors";

export const handleSearch = e => ({
  type: Types.HANDLE_SEARCH,
  payload: {
    searchValue: e.target.value
  }
});
