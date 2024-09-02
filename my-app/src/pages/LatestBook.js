import axios from "axios"; 
import { useState, useEffect } from "react";
import LatestBookList from '../components/LatestBookList';
import "./home.css";
// import data from "./books-content";

function HomePage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/books`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
    <div className="hom">
      <h2>Latest Books :</h2>
    </div>
    
    <div className="bk">
      <LatestBookList data = {data}></LatestBookList>
    </div><br/><br/>
    <img src="https://capricathemes.com/opencart/OPC01/OPC010003/OPC1/image/cache/catalog/main-Banner-03-1920x737.jpg" width="100%" height="60%"/>
    </>
  );
}

export default HomePage;
