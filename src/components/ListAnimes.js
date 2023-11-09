import Anime from "./Anime";
import "../Anime.css";

function AnimeList(props) {
  let lstAnimesRendered = props.elements.map((element) => {
    return (
      <Anime
        key={element.id}
        value={element}
        fnAddFavorites={props.fnAddFavorites}
      />
    );
  });

  return <div className="card-grid-container">{lstAnimesRendered}</div>;
}

export default AnimeList;
