import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userInfo } from "../../context/AuthProvider";

const Login = () => {
  const { login, user } = useContext(userInfo);
  const [maxDevice, setMaxDevice] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    //store customer device info
    fetch(`http://localhost:5000/storeDeviceInfo/${email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          login(email, password).then(() => {
            navigate("/device");
          });
        } else {
         
           alert("device limit over");
        }
      });
  };

  return (
    <div className="flex h-screen items-center">
      <form className="w-1/2 mx-auto border h-fit p-3" onSubmit={handleSubmit}>
        <h1 className="text-center font-bold text-xl">Login</h1>
        <div className="email text-center">
          <label htmlFor="">Enter Your Email:</label>
          <br />
          <input type="email" name="email" className="border" />
        </div>
        <div className="password text-center">
          <label htmlFor="">Enter Your Password:</label>
          <br />
          <input type="text" name="password" className="border" />
        </div>
        <div className="submit text-center my-3">
          <button type="submit" className="border p-2 rounded">
            Submit
          </button>
        </div>
        <div className="register text-center">
          <Link className="border p-2 rounded" to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
