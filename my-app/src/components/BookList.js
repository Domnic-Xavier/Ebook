import { Link } from "react-router-dom";

function BookList({data}){

    const books = data.slice(0, 8);
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
                        <h3>{book.name}<br /><span>{book.author}</span></h3><br/>
                        <h3 className="strike">Free <s> $100</s></h3>
                    </div>
                </div>
                
            </div>
        </Link>
    ))}
    </>     
    );
}

export default BookList;