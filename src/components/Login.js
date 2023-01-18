import React, { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import Body from "./Body";

const Login = () => {
    const inputName = useRef();
    const getName = JSON.parse(localStorage.getItem("name"));
//   let nameValue;
//   const [user, setUser] = useState(false);

  const isAuthenticated = () => {
    // return nameValue === "Tonny"
    //    ? (setUser(true), localStorage.setItem("name", JSON.stringify("Tonny")))
    //   : null;
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // nameValue = inputName.current.value;
    // isAuthenticated();
    return (
      inputName.current.value === "Tonny" &&
      (localStorage.setItem("name", JSON.stringify("Tonny")))
    );
  };

  return (
    <>
      {getName ? (
        <Navigate to="/" replace={true} />
    //   <Body />
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name..."
            name="name"
            ref={inputName}
          ></input>
          <button>Login</button>
        </form>
      )}
    </>
  );
};

export default Login;
