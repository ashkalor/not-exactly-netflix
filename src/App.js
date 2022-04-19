import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Row from "./components/Row";
import Search from "./components/Search";
import requests from "./requests";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (value) => {
    setSearchValue(value);
  };
  console.log(searchValue);
  return (
    <div className="App">
      <Header searchHandler={searchHandler} />
      {!searchValue ? (
        <div>
          <Banner />
          <Row
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
        </div>
      ) : (
        <Search
          searchValue={searchValue}
          fetchUrl={requests.fetchSearchResults}
        />
      )}
    </div>
  );
}

export default App;
