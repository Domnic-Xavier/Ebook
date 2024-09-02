import BookList from "../components/BookList";
import Genres from "./Genres";
import LatestBook from "./LatestBook";
// import data from "./books-content";
import axios from "axios"; 
import { useState, useEffect } from "react";
import "./home.css";

const newsItems = [
  {
    title: 'Why reading is important for our children?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'James Wong',
    date: '2 days ago',
    image: 'https://i.pinimg.com/736x/8d/92/19/8d9219cc330970e08b52181777c092b9.jpg' // Replace with actual image paths
  },
  {
    title: 'Benefits of reading: Smart, Diligent, Happy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'James Wong',
    date: '4 August 2024',
    image: 'https://i.pinimg.com/564x/45/9e/48/459e482e8e2e60f6d0aea22236c6c213.jpg'
  },
  {
    title: 'What books you should read in 2024?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'James Wong',
    date: '8 August 2024',
    image: 'https://i.pinimg.com/564x/36/3e/9d/363e9d84751c484a7c20f473e3a293f1.jpg'
  },
  {
    title: '10 Things you must know to improve your reading skills',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'James Wong',
    date: '1 August 2020',
    image: 'https://i.pinimg.com/564x/6e/63/63/6e6363fbb3d39a7cb595209aff7ad44c.jpg'
  }
];

const testimonials = [
  {
    text: 'Shopping books in Clevr. is very easy. Quick delivery and fast response. Their services are awesome!',
    author: 'Steve Henry',
    role: 'Book Lover',
    rating: 5,
    image: 'https://i.pinimg.com/564x/8d/da/39/8dda39d89cea777270772bb62782035c.jpg' // Replace with actual image paths
  }
];


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
      <h2>Free Books :</h2>
      <h3><a href="./viewall"> ( View all ) &gt;</a></h3>
    </div>
    
    <div className="bk">
      <BookList data = {data}></BookList>
    </div><br/>
    <br/><hr/>
    
    <br/><br/><br></br>
    <Genres></Genres><br/><br/><hr/>
    <div className="home-page">
      {/* Latest News Section */}
      <section className="latest-news">
        <h2>Latest News</h2><br/>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
        <div className="news-items">
          {newsItems.map((item, index) => (
            <div className="news-item" key={index}>
              <img src={item.image} alt={item.title} className="news-image" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {/* <div className="news-meta">
                <img src={item.image} alt={item.author} className="author-image" />
                <div className="author-info">
                  <span>{item.author}</span>
                  <span>{item.date}</span>
                </div>
              </div> */}
            </div>
          ))}
        </div><br/>
        <button className="view-more-button">View more</button>
      </section>

      
    </div>
    <br/><br/>
    <LatestBook></LatestBook>
    {/* Testimonials Section */}
    <section className="testimonials">
        <h2>Testimonials</h2><br/>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
        <div className="testimonial-item">
          <p>{testimonials[0].text}</p>
          <div className="testimonial-meta">
            <img src={testimonials[0].image} alt={testimonials[0].author} className="testimonial-author-image" />
            <div className="testimonial-author-info">
              <span>{testimonials[0].author}</span>
              <span>{testimonials[0].role}</span>
              <div className="rating">
                {Array(testimonials[0].rating).fill().map((_, i) => (
                  <span key={i}>&#9733;</span> // Star character
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
