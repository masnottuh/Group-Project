import React, { useState } from "react";
import { TOKEN_URL } from "../constants";
import { SIGNUP_URL } from "../constants";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  console.log(JSON.stringify(credentials));
  return fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

  async function signupUser(credentials) {
   return fetch(SIGNUP_URL, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(credentials)
    })
     .then(data => data.json())
  }
  
  
  
export default function Auth({setToken}) {
  
let [authMode, setAuthMode] = useState("signin")

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async e => {
    e.preventDefault();
    
    const token = await loginUser({
      username,
      password
    });
    
    setToken(token);
  }
 
  
  const handleSignup = async e => {
    e.preventDefault();
  
    const token = await signupUser({
      username,
      password
    });
    setToken(token);
}


  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  
  if (authMode === "signin") {
 
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleLogin}>
          <div className="Auth-form-content">
          <img src={require("../images/bc_logo.png")} alt="Book Club Logo" width='100%'/>
            <div className="text-center">
              Not registered yet?{" "}
              <a><span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span></a>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="username"
                className="form-control mt-1"
                placeholder="Enter username"
                onChange={e => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
             </div>
          </div>
        </form>
      </div>
    )
  }
  
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSignup}>
        <div className="Auth-form-content">
        <img src={require("../images/bc_logo.png")} alt="Book Club Logo" width='100%'/>
          <div className="text-center">
            Already registered?{" "}
            <a><span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span></a>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="username"
              className="form-control mt-1"
              placeholder="Enter username"
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={changeAuthMode}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

Auth.propTypes = {
  setToken: PropTypes.func.isRequired
};


// const loginUser = async(credentials)=> {
//   console.log(JSON.stringify(credentials));
//   const url= TOKEN_URL 
//   const context ={
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   }
//   const resp = await fetch(url,context)
//   const body = await resp.json()
//   if(resp.status === 400) {
//     setErrors(body)
//   }else{
//     navigate("/auth")
//   }

//   }