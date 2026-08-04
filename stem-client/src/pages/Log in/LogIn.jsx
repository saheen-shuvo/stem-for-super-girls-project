import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoSignIn } from "react-icons/go";

import AuthContext from "../../context/AuthContext/AuthContext";
import authImg from "../../assets/authImage/authentication.gif";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInUser, forgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInUser(email, password);
      toast.success("Logged in successfully");

      const res = await fetch(
        `https://stem-server.onrender.com/users?email=${email}`,
      );
      const userData = await res.json();

      if (userData?.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-home");
      }
    } catch (error) {
      console.error(error);
      toast.error("Wrong credentials or server error. Try again.");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast.warn("Please enter your email first");
      return;
    }

    try {
      await forgotPassword(email);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send reset email");
    }
  };

  return (
    <div className="auth-bg hero min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center p-4 lg:gap-28">
      {/* Image */}
      <div className="w-full lg:w-[30%] flex justify-center mt-14 lg:mt-0 mb-6 lg:mb-0">
        <img
          className="rounded-full border-8 border-dotted"
          src={authImg}
          alt="Authentication"
        />
      </div>

      {/* Form */}
      <div className="card w-full max-w-sm lg:w-[70%] shadow p-6 bg-base-100">
        <h1 className="text-center text-3xl font-bold mb-6">Sign in now!</h1>

        <form onSubmit={handleSignIn} className="space-y-4">
          <div className="form-control">
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered"
              required
            />
            <label className="label flex justify-between">
              <p className="text-sm">
                Don’t have an account?{" "}
                <Link to="/register" className="text-blue-900 link link-hover">
                  Click here
                </Link>
              </p>

              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-blue-900 link link-hover"
              >
                Forgot password?
              </button>
            </label>
          </div>

          <button className="btn bg-[#8c87d7] border-0 text-white w-full">
            Sign in <GoSignIn />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
