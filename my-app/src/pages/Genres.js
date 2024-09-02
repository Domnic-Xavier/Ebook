import GenreList from "../components/GenreList";
import genre from "./genres-content";
import axios from "axios"; 
import { useState, useEffect } from "react";

import "./genres.css";

function Genres() {
  // const [genre, setGenre] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`/api/genres`);
  //     setGenre(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return (
    <>
      <div className="hom">
        <h2>Genres :</h2>
      </div>
      <div className="bk">
        <GenreList genres={genre}></GenreList>
      </div><br/><br/>
      {/* <img src="https://capricathemes.com/opencart/OPC01/OPC010003/OPC2/image/cache/catalog/Main-Banner-01-1920x737.jpg" width="100%" height="55%"/> */}
    </>
  );
}

export default Genres;
