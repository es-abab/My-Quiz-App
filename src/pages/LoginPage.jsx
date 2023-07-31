import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import BlobAnimation from "../components/BlobAnimation";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const handleSignin = () => {
    navigate("/home");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the username and password
    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/home");

    // You can implement your authentication logic here (e.g., send login request to server)
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Do something with the username and password
    console.log("Username:", username);
    console.log("Password:", password);
    setIsLogin(true);

    // You can implement your authentication logic here (e.g., send login request to server)
  };

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-bg-image flex items-center justify-center w-screen min-h-screen bg-slate-900">
      <div className="animate-bounce_slow absolute top-64 left-54 z-1 w-[30vw] h-[20vw]">
      <BlobAnimation />
      </div>

      <div className=" absolute top-54 right- z-1 w-[15vw] h-[20vw]">
      <BlobAnimation />
      </div>
    <div className="z-10">
      {isLogin ? (
        <>
          <form
            className="bg-white p-8 rounded shadow-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <div className="mb-4">
              <label className="block font-semibold">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded border bg-slate-200 border-gray-300 focus:outline-none focus:border-blue-500"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block font-semibold">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded border bg-slate-200 border-gray-300 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Login
            </button>
            <p className="text-sm py-2">
              Don't have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Sign up
              </span>
            </p>
          </form>
        </>
      ) : (
        <>
          <form
            className="bg-white p-8 rounded shadow-md"
            onSubmit={handleSignUp}
          >
            <h2 className="text-2xl font-bold mb-6">Sign up</h2>
            <div className="mb-4">
              <label className="block font-semibold">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded border bg-slate-200 border-gray-300 focus:outline-none focus:border-blue-500"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block font-semibold">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded border bg-slate-200 border-gray-300 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block font-semibold">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded border bg-slate-200 border-gray-300 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Sign up
            </button>
            <p className="py-2 text-sm">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setIsLogin(!isLogin)}
              >
                Login
              </span>
            </p>
          </form>
        </>
      )}
      </div>
    </div>
  );
};

export default LoginPage;
