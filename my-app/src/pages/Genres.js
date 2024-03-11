import GenreList from "../components/GenreList";
import genres from "./genres-content";
import "./genres.css";

function HomePage() {
  return (
    <>
      <div className="hom">
        <h2>GENRES </h2>
      </div>
      <div className="bk">
        <GenreList genres={genres}></GenreList>
      </div>
    </>
  );
}

export default HomePage;
