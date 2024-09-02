import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, collection, addDoc } from "firebase/firestore";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");


  const navigate = useNavigate();

  const signUp = async () => {

    if(password!==confirmPassword)
    {
      setError("passwords do not match");
    }
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // const userId = userCredential.user.uid;
      
      // const db = getFirestore();
      // await addDoc(collection(db, "users"), {
      //   userId,
      //   name,
      //   email
      // });
      
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <div>
      <h2>Sign Up</h2>
      <br />
      <hr width="30%" />
      <br />
      {error && <p className="error">{error}</p>}
      <form>
        <label>
          Name:
          <input
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="pssword"
            placeholder="Enter password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={signUp} >Sign Up</button><br/><br/>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
      </div>
      <div>
        <img src="https://assets-v2.lottiefiles.com/a/6beb774c-1166-11ee-a6f1-4788c8724adf/E9TtaYgKZu.gif" height="500px" width="500px"/>
        {/* <img src="https://i.pinimg.com/564x/83/4a/67/834a67b7a18094ddfdacc50059f2e68c.jpg" height="500px" width="600px"/> */}
      </div>
    </div>
  );
};

export default SignupPage;
