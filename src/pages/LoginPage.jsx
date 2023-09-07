import React, { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import BlobAnimation from "../components/BlobAnimation";

const LoginPage = () => {
  const navigate = useNavigate();
  // const { loginWithRedirect } = useAuth0();
  const [isAdmin, setIsAdmin] = useState(false)

//  const handleAdminStatus = () => {
//   setIsAdmin((prevIsAdmin) => !prevIsAdmin);

//  }

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

    if(isAdmin) {
      navigate("/admin");
    }else{
      navigate('/home')
    }

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

      <div className=" absolute top-64 right- z-1 w-[15vw] h-[20vw]">
      <BlobAnimation />
      </div>
    <div className="z-10 w-[30rem]">
      {isLogin ? (
        <>
          <form
            className="bg-white p-8 rounded shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold">Login</h2>
           
            <div className="flex items-center bg-slate-300 rounded-full ">
      <label className={`flex items-center gap-4 cursor-pointer p-1`}>   
        <span onClick={() => setIsAdmin(false)} className={`px-4 py-2 flex justify-end hover:bg-blue-300 hover:rounded-full transition duration-200 ease-in-out ${!isAdmin ? "text-blue-600 font-bold" : "text-slate-600 font-light"}`}> as Student</span>
        <span onClick={() => setIsAdmin(true)} className={`px-4 py-2 flex justify-end hover:bg-blue-300 hover:rounded-full transition duration-200 ease-in-out ${isAdmin ? "text-blue-600 font-bold" : "text-slate-600 font-light"}`}>as Admin</span>
      </label>
    </div>
    </div>

            <div className="mb-4">
              <label className="flex justify-start mt-4 mb-1 px-2 font-semibold">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded border bg-slate-200 border-gray-300 focus:outline-none focus:border-blue-500"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="flex justify-start mt-4 mb-1 px-2 font-semibold">Password</label>
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
              className="w-full mt-10 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
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
             <div className="flex justify-center items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold">Sign up</h2>
           
            {/* <div className="flex items-center bg-slate-300 rounded-full ">
      <label className={`flex items-center gap-4 cursor-pointer p-1`}>   
        <span onClick={handleAdminStatus} className={`px-4 py-2 flex justify-end hover:bg-blue-300 hover:rounded-full transition duration-200 ease-in-out ${!isAdmin ? "text-blue-600 font-bold" : "text-slate-600 font-light"}`}> as Student</span>
        <span onClick={handleAdminStatus} className={`px-4 py-2 flex justify-end hover:bg-blue-300 hover:rounded-full transition duration-200 ease-in-out ${isAdmin ? "text-blue-600 font-bold" : "text-slate-600 font-light"}`}>as Admin</span>
      </label>
    </div> */}
    </div>
    <div className="mb-4">
              <label className="flex justify-start mt-4 mb-1 px-2 font-semibold">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded border bg-slate-200 border-gray-300 focus:outline-none focus:border-blue-500"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="flex justify-start mt-4 mb-1 px-2 font-semibold">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded border bg-slate-200 border-gray-300 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="flex justify-start mt-4 mb-1 px-2 font-semibold">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded border bg-slate-200 border-gray-300 focus:outline-none focus:border-blue-500"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-8 rounded"
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
