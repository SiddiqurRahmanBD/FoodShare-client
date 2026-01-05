import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const { createUser, setUser, updateUser, googleSignIn } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    if (name.length < 5) {
      setNameError("Full name must be at least 5 characters.");
      return;
    } else {
      setNameError("");
    }

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regex.test(password)) {
      setPasswordError("Requires: 1 Uppercase, 1 Lowercase, & 6+ characters.");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Welcome to FoodShare!");
            navigate("/");
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.code));
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        toast.success("Signed in with Google");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-base-100 transition-colors duration-500 px-4 pb-5 pt-30 overflow-hidden">
      <title>Register | FoodShare</title>

      {/* Decorative Background Accents */}
      <div className="absolute top-[-10%] left-[-10%] bg-green-500/10 rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="card w-full max-w-md bg-base-100 border border-base-200 shadow-2xl z-10 transition-all">
        <div className="card-body p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-base-content mb-3 tracking-tight">
              Join <span className="text-green-600">FoodShare</span>
            </h1>
            <p className="text-base-content/60 font-medium">
              Start your journey of giving today.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Full Name */}
            <div className="form-control">
              <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered bg-base-200/50 border-base-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all rounded-xl"
                placeholder="Type your name"
                required
              />
              {nameError && (
                <p className="text-[10px] text-error font-semibold mt-1 px-1 uppercase tracking-tight">
                  {nameError}
                </p>
              )}
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="input input-bordered bg-base-200/50 border-base-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all rounded-xl"
                placeholder="Paste image link"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered bg-base-200/50 border-base-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all rounded-xl"
                placeholder="name@example.com"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70">
                Password
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full bg-base-200/50 border-base-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all rounded-xl pr-12"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-green-600 transition-colors focus:outline-none"
                >
                  {show ? <IoEyeOff size={18} /> : <FaEye size={18} />}
                </button>
              </div>
              {passwordError && (
                <p className="text-[10px] text-error font-semibold mt-1 px-1 uppercase leading-tight">
                  {passwordError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-block bg-green-600 hover:bg-green-700 text-white border-none rounded-xl mt-4 shadow-lg shadow-green-600/20 py-3 h-auto min-h-0 text-base font-bold"
            >
              Sign Up
            </button>
          </form>

          <div className="divider text-[10px] font-bold text-base-content/30 my-8">
            OR JOIN WITH
          </div>

          <button
            onClick={handleGoogle}
            className="btn btn-block btn-outline border-base-300 hover:bg-base-200 hover:text-base-content rounded-xl flex items-center justify-center gap-2 h-auto py-3 min-h-0 font-bold"
          >
            <FcGoogle size={20} /> Google
          </button>

          <p className="text-center text-sm font-medium mt-10">
            Already a member?{" "}
            <Link
              className="text-green-600 hover:underline font-bold"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
