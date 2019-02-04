const key = "614a724250c9cc81548917d720ba1994";
const language = "language=pt-br";

export const movies = {
  options: {
    url: `search/movie?api_key=${key}&${language}&query=`
  }
};

export const genres = {
  options: {
    url: `genre/movie/list?api_key=${key}&${language}`
  }
};

export const movie = id => ({
  options: {
    url: `movie/${id}?api_key=${key}&${language}&append_to_response=videos`
  }
});
