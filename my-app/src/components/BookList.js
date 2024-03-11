import { Link } from "react-router-dom";

function BookList({books}){
    return(
    <>
    {books.map((book)=>(
        <Link key ={book.name} to={`/home/${book.name}`} className="card">
            <div >
                <div className="img-bx">
                    <img  src={book.image} alt="book image"/>
                </div>
                <div class="content">
                    <div class="detail">
                        <h3>{book.name}<br /><span>{book.author}</span></h3>
                    </div>
                </div>
            </div>
        </Link>
    ))}
    </>     
    );
}

export default BookList;