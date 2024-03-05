import BookList from "../components/BookList";
import books from "./books-content";
import "./home.css";

function HomePage() {
  return (
    <>
    <div className="hom" align="center">
      <h2>Free Books </h2>
    </div>
    <div className="bk">
    <BookList books = {books}></BookList>
    </div>
    {/*
    <div className="rel">
      <div class="card">
    <div class="img-bx">
      <img id="img-01"/>
    </div>
    <div class="content">
      <div class="detail">
        <h5>One Failure at a Time: A Modern Survival Guide<br /><span>Suzanna Alsayed</span></h5>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="img-bx">
    <img id="img-02"/>
    </div>
    <div class="content">
      <div class="detail">
        <h5>Flatland <br/>(illustrated version)<br /><span>Edwin A. Abbott</span></h5>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="img-bx">
    <img id="img-03"/>
    </div>
    <div class="content">
      <div class="detail">
        <h5>Beyond Good <br/>and Evil<br/><span>Friedrich Wilhelm Nietzsche</span></h5>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="img-bx">
    <img id="img-04"/>
    </div>
    <div class="content">
      <div class="detail">
        <h5>Walden
and On the Duty of Civil Disobedience
<br /><span>Henry David Thoreau</span></h5>
      </div>
    </div>
  </div>
    </div> */}

    </>
  );
}

export default HomePage;
