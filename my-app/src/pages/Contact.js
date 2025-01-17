import "./contact.css";

function Contact() {
    return (
        <>

            <div class="wrapper">
                <div class="left">
                    <img src="https://i.pinimg.com/564x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg" alt="user" />
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
                        <h3>Contact Now</h3><br/>
                        <div class="info_data">
                            <div class="data">
                                <h4>Email</h4>
                                <p>xavier@lyrostech.com</p>
                            </div>
                            <div class="data">
                                <h4>Mobile Number</h4>
                                <p>9632863518</p>
                            </div>
                        </div>
                    </div>
                    <form>
                        <input type="text" placeholder="Enter Your Name" />
                        <input type="text" placeholder="Enter Your Email" />
                        <textarea placeholder="Write Your Message" rows="5" className="textarea"></textarea>
                        <input type="submit" value="Send" />
                    </form>

                </div>
            </div>
        </>
    );
}

export default Contact;
