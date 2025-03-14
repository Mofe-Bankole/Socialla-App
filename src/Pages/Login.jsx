import { useState } from "react";
// import axios from "axios";

function Login() {
  // const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);
      alert("Login Successful!");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="md:flex-col items-center mx-auto mb-5">
      <h2 className="md:text-blue-400 text-center font-bold px-6 md:px-3.5 pt-7 pb-6 md:text-3xl sm:text-2xl xl:text-4xl">
        <span>Login</span>
      </h2>

      <form
        className="py-3 rounded-lg shadow-2xl md:w-lg sm:w-md w-full mx-auto px-2"
        onSubmit={handleSubmit} // ✅ Fixed
      >
        <div className="flex flex-col px-12 w-auto gap-y-2 pb-5">
          <h3 className="text-2xl font-semibold py-4">Login to your Account</h3>

          <div className="flex flex-col pb-3.5">
            <label className="pb-3">Email</label>
            <input
              type="email"
              name="email" // ✅ Added name attribute
              className="px-4 py-4 border-0 rounded-sm outline-1 outline-slate-300 min-h-11"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col pb-3.5">
            <label className="pb-3">Password</label>
            <input
              type="password"
              name="password" // ✅ Added name attribute
              className="px-4 py-4 border-0 rounded-sm outline-1 outline-slate-300 min-h-11"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)} // ✅ Uses handleChange
              required
            />
          </div>

          <button
            type="submit"
            className="text-white md:text-lg text-xl bg-blue-500 w-full text-center items-center border-0 outline-0 rounded-sm py-4 mt-1"
          >
            Sign Up
          </button>

          <p className="text-center pt-4 text-blue-400">
            Already have an account?{/*  <a href="#">Sign In</a> */}
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
