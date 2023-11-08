import Book from "./Book";
import "../Book.css";

function BookList(props) {
  let lstBooksRendered = props.elements.map((element) => {
    return (
      <Book
        key={element.id}
        value={element}
        fnAddFavorites={props.fnAddFavorites}
      />
    );
  });

  return <div className="card-grid-container">{lstBooksRendered}</div>;
}

export default BookList;
