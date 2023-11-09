import AnimeList from "./components/ListAnimes";
import Navbar from "./components/Navbar";
import ListFavorites from "./components/ListFavorites";
import dataAnime from "./data/Animes";
import "./App.css";

import { useState } from "react";
import CreateBook from "./components/CreateAnime";

function App() {
  const [animeList, setAnimeList] = useState(dataAnime);
  const [ListFavoriteAnimes, setListFavoriteAnimes] = useState([]);
  const [notification, setNotification] = useState("");

  function addAnimeToFavorite(element) {
    if (ListFavoriteAnimes.find((anime) => anime.id === element.id)) {
      console.log("El anime ya está en favoritos.");
      setNotification(`El anime ${element.title}, ya está en favoritos.`);
      return;
    }

    let tempAnimeList = [...ListFavoriteAnimes];
    tempAnimeList.push(element);
    setListFavoriteAnimes(tempAnimeList);
    setNotification(`Anime ${element.title} agregado a favoritos.`);
  }

  function removeAnimeFromFavorites(element) {
    const updatedFavorites = ListFavoriteAnimes.filter(
      (anime) => anime.id !== element.id
    );
    setListFavoriteAnimes(updatedFavorites);
  }

  function NewAnime(element) {
    setAnimeList([...animeList, element]);
  }

  return (
    <div className="App">
      <Navbar />
      {notification && (
        <div className="alert alert-info">
          {notification}
          <button
            onClick={() => setNotification("")}
            className="btn btn-link btn-sm"
          >
            Close
          </button>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CreateBook fnNewBook={NewAnime} />
            <ListFavorites
              elements={ListFavoriteAnimes}
              fnRemoveAnimeFromFavorites={removeAnimeFromFavorites}
            />
          </div>
          <div className="col-md-8">
            <AnimeList
              elements={animeList}
              fnAddFavorites={addAnimeToFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
