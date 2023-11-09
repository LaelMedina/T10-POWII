import { useState } from "react";

function CreateAnime(props) {
  const [name, setTitle] = useState("");
  const [creator, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.fnNewAnime({
      name: name,
      creator: creator,
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
        placeholder="Name of the Anime"
        className="form-control mb-2"
        type="text"
        value={name}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Creator"
        className="form-control mb-2"
        type="text"
        value={creator}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        placeholder="Year of publishment"
        className="form-control mb-2"
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        placeholder="Image"
        className="form-control mb-2"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input type="submit" value="Crear" className="btn btn-primary" />
    </form>
  );
}

export default CreateAnime;
