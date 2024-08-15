export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f7f95854f579d5b3409deede6c353fca&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };