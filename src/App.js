import BookList from "./components/ListBooks";
import Navbar from "./components/Navbar";
import ListFavorites from "./components/ListFavorites";
import dataBook from "./data/books";
import "./App.css";

import { useState } from "react";
import CreateBook from "./components/CreateBook";

function App() {
  const [bookList, setBookList] = useState(dataBook);
  const [ListFavoriteBooks, setListFavoriteBooks] = useState([]);
  const [notification, setNotification] = useState("");

  function addBookToFavorite(element) {
    // Verificar si el elemento ya está en la lista de favoritos
    if (ListFavoriteBooks.find((book) => book.id === element.id)) {
      console.log("El anime ya está en favoritos.");
      setNotification(`El anime ${element.title}, ya está en favoritos.`);
      return;
    }

    // Si no está en la lista, agrégalo a la lista de favoritos
    let tempBookList = [...ListFavoriteBooks];
    tempBookList.push(element);
    setListFavoriteBooks(tempBookList);
    setNotification(`Anime ${element.title} agregado a favoritos.`);
  }

  function removeBookFromFavorites(element) {
    const updatedFavorites = ListFavoriteBooks.filter(
      (book) => book.id !== element.id
    );
    setListFavoriteBooks(updatedFavorites);
  }

  function NewBook(element) {
    setBookList([...bookList, element]);
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
            Cerrar
          </button>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CreateBook fnNewBook={NewBook} />
            <ListFavorites
              elements={ListFavoriteBooks}
              fnRemoveBookFromFavorites={removeBookFromFavorites}
            />
          </div>
          <div className="col-md-8">
            <BookList elements={bookList} fnAddFavorites={addBookToFavorite} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
