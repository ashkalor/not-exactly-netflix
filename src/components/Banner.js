import { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * (response.data.results.length - 1))
        ]
      );
    };
    fetchData();
  }, []);
  console.log(movie);
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "top center",
      }}
      className="object-contain h-[448px] text-white"
    >
      <div className="pt-[140px] h-[190px] max-w-[500px]">
        <h1 className="font-bold text-6xl mb-5">
          {movie.title || movie.name || movie.orginal_name}
        </h1>
        <div className="flex space-x-3 mb-5">
          <button className="flex items-center space-x-1 bg-white hover:bg-gray-300 font-bold py-1  pl-[1rem] pr-[1.2rem] rounded-md text-black">
            <BsFillPlayFill size="2rem" className="-ml-1" />
            <div className="font-bold text-xl ">Play</div>
          </button>
          <button className="bg-black bg-opacity-50 flex space-x-2 items-center hover:bg-gray-500 text-white font-bold hover:text-white py-2 rounded-md  pl-[1rem] pr-[1.2rem] hover:border-transparent">
            <AiOutlineInfoCircle size="25px" className="" />{" "}
            <div className="font-bold text-xl ">Info</div>
          </button>
        </div>
        <div className="text-ellipsis overflow-hidden max-h-[80px]">
          {movie?.overview}
        </div>
      </div>
    </div>
  );
};

export default Banner;
