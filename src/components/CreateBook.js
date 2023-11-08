import { useState } from "react";

function CreateBook(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.fnNewBook({
      title: title,
      author: author,
      year: year,
      image: image,
    });

    setTitle("");
    setAuthor("");
    setYear("");
    setImage("");
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="border border-2 border-secondary p-2 rounded mb-5"
    >
      <input
        placeholder="Nombre del anime"
        className="form-control mb-2"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Creador"
        className="form-control mb-2"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        placeholder="Año de publicación"
        className="form-control mb-2"
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        placeholder="Imagen"
        className="form-control mb-2"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input type="submit" value="Crear" className="btn btn-primary" />
    </form>
  );
}

export default CreateBook;
