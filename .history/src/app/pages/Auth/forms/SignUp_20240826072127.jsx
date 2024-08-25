import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import AuthLayout from "../../../layouts/AuthLayout"; // Adjust the import path according to your project structure

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    if (!emailRef.current.value.endsWith(".com")) {
      return setError("Email must end with '.com'");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch (error) {
      console.error(error);
      setError("Failed to create an account: " + error.message);
    }
    setLoading(false);
  }

  return (
    <AuthLayout>
      <h2 className="text-4xl font-bold text-center text-white mb-8 animate-fadeIn">
        Sign Up
      </h2>
      {error && (
        <div className="text-red-400 text-center font-medium mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="animate-slideUp">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-200 border border-white border-opacity-30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 ease-in-out"
            ref={emailRef}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full mt-2 px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-200 border border-white border-opacity-30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 ease-in-out"
            ref={passwordRef}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password-confirm"
            className="block text-sm font-medium text-white"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="password-confirm"
            className="w-full mt-2 px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-200 border border-white border-opacity-30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 ease-in-out"
            ref={passwordConfirmRef}
            required
          />
        </div>
        <button
          disabled={loading}
          className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 animate-bounce"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-6 text-center text-white">
        Already have an account?&nbsp;
        <Link
          to="/Login"
          className="font-semibold text-white underline hover:text-pink-300 transition duration-300 ease-in-out"
        >
          Log In
        </Link>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
