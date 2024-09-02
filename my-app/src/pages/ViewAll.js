import { Link } from "react-router-dom";
import axios from "axios"; 
import { useState, useEffect } from "react";
// import "./home.css";

function ViewAll(){

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
    return(
    <>
    <div className="bk">
    {data.map((book)=>(
        <Link key ={book.name} to={`/home/${book.name}`} className="card">
            <div >
                <div className="img-bx">
                    <img  src={book.image} alt="book image"/>
                </div>
                <div class="content">
                    <div class="detail">
                        <h3>{book.name}<br /><span>{book.author}</span></h3><br/>
                        <h3 className="strike">Free <s> $100</s></h3>
                    </div>
                </div>
            </div>
        </Link>
    ))}
    </div>
    </>     
    );
}

export default ViewAll;

// import BookList from "../components/BookList";
// import Genres from "./Genres";
// import LatestBook from "./LatestBook";
// // import data from "./books-content";
// import axios from "axios"; 
// import { useState, useEffect } from "react";
// import "./home.css";

// function HomePage() {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`/api/books`);
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <>
//     <div className="hom">
//       <h2>Free Books :</h2>
//       <h3><a href="./viewall" data = {data}> ( View all ) &gt;</a></h3>
//     </div>
    
//     <div className="bk">
//       <BookList data = {data}></BookList>
//     </div><br/>
//     <br/><hr/><br/><br/>
//     <Genres></Genres><br/><br/><hr/><br/><br/>
//     <LatestBook></LatestBook>
//     </>
//   );
// }

// export default HomePage;
