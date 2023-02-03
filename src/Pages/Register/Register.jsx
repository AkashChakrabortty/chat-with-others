import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div className="flex h-screen items-center">
        <form className="w-1/2 mx-auto border h-fit p-3">
          <h1 className="text-center font-bold text-xl">Register</h1>
          <div className="name text-center">
            <label htmlFor="">Enter Your Name:</label>
            <br />
            <input type="text" name="name" className="border" />
          </div>
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
            <Link className="border p-2 rounded" to="/">
              Login
            </Link>
          </div>
        </form>
      </div>
    );
};

export default Register;