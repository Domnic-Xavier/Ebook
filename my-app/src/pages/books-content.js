import img1 from "./bookimg/book-01.jpg";
import img2 from "./bookimg/book-02.jpg";
import img3 from "./bookimg/book-03.jpg";
import img4 from "./bookimg/book-04.jpg";

const books = [
    {
        image: img1,
        name: "domnic-js",
        author: "Splitting the values",
        content: [
          "JavaScript String split() Method is used to split the given string into an array of strings by separating it into substrings using a specified separator provided in the argument.",
          "Hi This is First articles First content",
          "Hi This is First articles Second content",
          "Hi This is First articles Third content",
        ],
      },
    {
      image: img2,
      name: "split-js",
      author: "Splitting the values",
      content: [
        "JavaScript String split() Method is used to split the given string into an array of strings by separating it into substrings using a specified separator provided in the argument.",
        "Hi This is First articles First content",
        "Hi This is First articles Second content",
        "Hi This is First articles Third content",
      ],
    },
    {
      image: img3,
      name: "map-js",
      author: "Mapping the values",
      content: [
          " JavaScript map() method iterates over an array, applying a callback function to each element, and returns a new array with the results. The map() method does not change the original array, and does not execute the function for empty elements.",
        "Hi This is Second articles First content",
        "Hi This is Second articles Second content",
        "Hi This is Second articles Third content",
      ],
    },
    {
      image: img4,
      name: "filter-js",
      author: "Filtering the values",
      content: [
          " JavaScript Array filter() Method is used to create a new array from a given array consisting of only those elements from the given array that satisfy a condition set by the argument method. ",
        "Hi This is Third articles First content",
        "Hi This is Third articles Second content",
        "Hi This is Third articles Third content",
      ],
    },
    {
        name: "react-js",
        author: "Filtering the values",
        content: [
            " JavaScript Array filter() Method is used to create a new array from a given array consisting of only those elements from the given array that satisfy a condition set by the argument method. ",
          "Hi This is Third articles First content",
          "Hi This is Third articles Second content",
          "Hi This is Third articles Third content",
        ]
      }
  ];
  
  export default books;
  