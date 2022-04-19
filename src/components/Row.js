import { useEffect, useState } from "react";
import axios from "../axios";
import { IoCloseOutline } from "react-icons/io5";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    };
    fetchData();
  }, [fetchUrl]);
  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "", {
        id: true,
        multi: false,
      })
        .then((url) => {
          setTrailerURL(url);
          //   const urlParams = new URLSearchParams(new URL(url).search);
          //   console.log(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <div className="pl-[3%]">
        <h1 className="text-xl font-bold text-white ">{title}</h1>
        <div className="flex scrollbar-hide overflow-y-hidden overflow-x-scroll p-[20px] group">
          {movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
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
      <div className="flex relative">
        {trailerURL && (
          <iframe
            className="mx-auto w-[690px] object-contain h-[360px]"
            src={`https://www.youtube.com/embed/${trailerURL}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        )}
        {trailerURL && (
          <IoCloseOutline
            onClick={() => {
              setTrailerURL("");
            }}
            size="35px"
            className="text-white absolute right-10 hover:text-gray-400 "
          />
        )}
      </div>
    </div>
  );
};

export default Row;
