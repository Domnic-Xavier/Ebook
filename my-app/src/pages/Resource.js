import "./contact.css";

function Resource() {
    return (
      <>
      
    <div class="wrapper">
    <div class="left">
        <img src="pro.jpg" alt="user"/>
        <h4>Domnic Xavier</h4>
         <p>Software Engineer</p>
         <div class="social_media">
          <ul>
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        </ul>
        </div>
    </div>
    <div class="right">
        <div class="info">
            <h3>Contact Now</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>Email</h4>
                    <p>example@gmail.com</p>
                 </div>
                 <div class="data">
                   <h4>Mobile Number</h4>
                    <p>98xxxxxxx</p>
              </div>
            </div>
        </div>
        <form>
          <input type="text" placeholder="Enter Your Name"/>
          <input type="text" placeholder="Enter Your Email"/>
          <textarea placeholder="Write Your Message" rows="5"></textarea>
          <input type="submit" value="Send"/>
        </form>
        
    </div>
</div>
      </>
    );
  }
  
  export default Resource;
  