import { Link } from "react-router-dom";

function BookList({ data }) {
  if (!data) {
    return <div>Loading...</div>; // or any placeholder content
  }

  // Slice the data array to get only the last 8 books
  const lastBooks = data.slice(-8);

  return (
    <>
      {lastBooks.map((book) => (
        <div key={book.name} className="card">
          <Link to={`/home/${book.name}`}>
            <div>
              <div className="img-bx">
                <img src={book.image} alt="book image" />
              </div>
              <div className="content">
                <div className="detail">
                  <h3>{book.name}<br /><span>{book.author}</span></h3><br />
                  <h3 className="strike">Free <s> $100</s></h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default BookList;
