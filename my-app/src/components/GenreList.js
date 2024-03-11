import { Link } from "react-router-dom";

function GenreList({genres}){
    return(
    <>
    {genres.map((book)=>(
        <Link to={`/genres/${book.genre}`} className="gen">
            <img src={book.image} alt={book.alt}/>
            <p className="cen">{book.genre}</p>
        </Link>
    ))}
    </>     
    );
}

export default GenreList;