import Favorite from "./Favorite";

function ListFavorites(props) {
  let listFavoritesRendered = props.elements.map((element) => {
    return (
      <Favorite
        key={element.id}
        value={element}
        fnRemoveAnimeFromFavorites={props.fnRemoveAnimeFromFavorites}
      />
    );
  });

  return (
    <div
      style={{
        borderTop: "1px solid rgb(210, 210, 210)",
      }}
    >
      <h4 style={{ margin: "20px 0 20px 0" }}>Modified</h4>
      {listFavoritesRendered}
    </div>
  );
}

export default ListFavorites;
