import { useEffect, useState } from "react";
import axios from "../axios";
const baseURL = "https://image.tmdb.org/t/p/original/";
const Search = ({ searchValue, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl + searchValue);
      setMovies(response.data.results);
      console.log(response.data.results);
    };
    fetchData();
  }, [fetchUrl, searchValue]);
  return (
    <div className=" pt-[150px] px-[3%] text-white">
      <div className="text-4xl mb-10">Search Results: </div>
      <div className="grid grid-cols-4 w-[full] gap-6">
        {movies
          .filter((movie) => movie.backdrop_path != null)
          .map((movie) => (
            <div>
              <img
                className="object-contain"
                key={movie.id}
                src={`${baseURL}${movie?.backdrop_path}`}
                alt={movie?.name}
              />
              <div className="truncate w-[250px] mb-5 mt-1">
                {movie?.name || movie?.title || movie?.original_name}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
