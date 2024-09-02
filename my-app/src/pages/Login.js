import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from  "firebase/auth";


const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const logIn = async () => {
    try{
      await signInWithEmailAndPassword(getAuth(), email,password)
      navigate('/')
    }
    catch(error) {
      setError(error.message);
    }
  }


  return (
    <div className="login">
      <div className="logincontrol">
      <h2>Sign In</h2><br/><hr width="30%"/><br/>
      {error &&  <p className="error">{error}</p>}
      {/* <form > */}
        <label>
          Email:
          <input
            // type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
        </label>
        <button onClick={logIn}>Sign Up</button><br/><br/>
        {/* <button type="reset">clear</button> */}
        <p>Don't have an account ? <Link to='/reg'>sign-up</Link></p>
      {/* </form> */}
      </div>
      <div  >
        <img src="https://rurutek.com/jio/assets/img/login-animate.gif" height="530px" width="540px"/>
        {/* <img src="https://www.chqbank.com/assets/user/img/login.png" weight="383" height="417"/> */}
      </div>
    </div>
    
  );
};

export default SignupPage;
