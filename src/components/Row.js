import { useEffect, useState } from "react";
import axios from "../axios";

const baseURL = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="pl-[5%]">
      <h1 className="text-xl font-bold text-white ">{title}</h1>
      <div className="flex scrollbar-hide overflow-y-hidden overflow-x-scroll p-[20px] group">
        {movies.map((movie) => (
          <img
            className={`object-contain max-h-[100px] mr-[10px] hover:scale-[1.08] transition-transform ease-in-out ${
              isLargeRow ? "max-h-[250px]" : "max-h-[100px]"
            }`}
            key={movie.id}
            src={`${baseURL}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
