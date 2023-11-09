function Favorite(props) {
  return (
    <div
      className="alert alert-info d-flex align-items-center justify-content-between p-2"
      role="alert"
    >
      <img
        src={props.value.image}
        alt="..."
        style={{ width: "50px", height: "80px", marginRight: "10px" }}
      />
      <div style={{ marginLeft: "10px" }}>
        <small style={{ display: "block", wordWrap: "break-word" }}>
          {props.value.title}
        </small>
      </div>
      <button
        onClick={() => props.fnRemoveAnimeFromFavorites(props.value)}
        className="btn btn-danger"
      >
        Remove
      </button>
    </div>
  );
}

export default Favorite;
