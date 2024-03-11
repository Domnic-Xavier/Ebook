// import books from "./books-content";
// import { useParams } from "react-router-dom";
// import NotFoundPage from "./NotFoundPage";
// import "./book.css"

// function BookPage() {
//   const { bookId } = useParams();
//   const book = books.find(book => book.name === bookId);

//   if (book) {
//     return (
//       <>
//         <div className="book">
//          <div class="card1">
//             <div class="card">
//                 <div class="left-container">
//                   <img src={book.image} alt="Profile pic"/>
//                   <h2 class="gradienttext">Kritika Roy</h2>
//                   <p>Project Manager</p>
//                 </div>
//                 <div class="right-container">
//                   <h3 class="gradienttext">My Profile </h3>
//                   <table>
//                       <tr>
//                           <td>Name :</td>
//                           <td>Kritika Roy</td>
//                         </tr>
//                     <tr>
//                       <td>Age :</td>
//                       <td>30</td>
//                     </tr>
//                     <tr>
//                       <td>Contact NO :</td>
//                       <td>98 XXXXXXXX</td>
//                     </tr>
//                     <tr>
//                       <td>Email :</td>
//                       <td>kritika@example.com</td>
//                     </tr>
//                     <tr>
//                       <td>Address :</td>
//                       <td>New york, USA</td>
//                     </tr>
//                   </table>
//                   <div class="social-icons">
//                     <a href="#"><i class="fa fa-facebook-f"></i></a>
//                     <a href="#"><i class="fa fa-twitter"></i></a>
//                     <a href="#"><i class="fa fa-linkedin"></i></a>
//                     <a href="#"><i class="fa fa-github"></i></a>
//                   </div>
//                   <div class="credit">Made with <span style="color:tomato;font-size:20px;">&#x2764; </span>by<a href="techmidpoint.com/"> techmidpoint</a></div>
//                 </div>
//               </div>
//         </div>
//         </div>
//       </>
//     );
//   } else {
//     return <NotFoundPage></NotFoundPage>;
//   }
// }

// export default BookPage;
