import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { GoSignIn } from "react-icons/go";

import AuthContext from "../../context/AuthContext/AuthContext";
import authImg from "../../assets/authImage/authentication.gif";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    // Password validation
    if (password.length < 6) {
      toast.warn("Password must be at least 6 characters");
      return;
    }

    // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    // if (!passwordRegex.test(password)) {
    //   toast.warn(
    //     "Password must contain at least one uppercase and one lowercase letter"
    //   );
    //   return;
    // }

    try {
      setLoading(true);

      const result = await createUser(email, password);
      const user = result.user;

      // Update display name
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      const userInfo = {
        userId: user.uid,
        name,
        email,
        photoURL,
        role: "student",
        createdAt: new Date(),
      };

      await fetch("http://localhost:5001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      toast.success("Account created successfully!");
      form.reset();
      navigate("/course-recommendation");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-bg hero min-h-screen flex flex-col-reverse lg:flex-row lg:gap-28 items-center justify-center p-4 mb-8">
      {/* Form */}
      <div className="card w-full max-w-sm lg:w-[70%] shadow p-6 mt-8 bg-base-100">
        <h1 className="text-center text-2xl font-bold">Register Here!</h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control">
            <label className="label">User Name</label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">Profile Image URL</label>
            <input
              type="url"
              name="photoURL"
              placeholder="https://example.com/my-photo.jpg"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control relative">
            <label className="label">Password</label>
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="btn btn-xs absolute bottom-2 right-2"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>

          <button
            className="btn bg-[#8c87d7] border-0 text-white w-full"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Sign up"} <GoSignIn />
          </button>
        </form>

        <p className="text-xs text-center mt-4">
          Already have an account?{" "}
          <Link className="underline" to="/log-in">
            Sign in
          </Link>
        </p>
      </div>

      {/* Image */}
      <div className="w-full lg:w-[30%] flex justify-center mt-16 lg:mt-0">
        <img
          className="rounded-full border-8 border-dotted"
          src={authImg}
          alt="Authentication"
        />
      </div>
    </div>
  );
};

export default Register;
