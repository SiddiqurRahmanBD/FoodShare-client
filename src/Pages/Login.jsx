import React, { useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const { signIn, setUser, googleSignIn, forgetPass } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Welcome back! Login Successful");
        setUser(user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        setError(error.code);
        toast.error("Invalid credentials. Please try again.");
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        toast.success("Signed in with Google");
        navigate(location.state || "/");
      })
      .catch((error) => {
        setError(error.code);
        toast.error("Google sign-in failed.");
      });
  };

  const handleForgetPass = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.warn("Please enter your email first!");
      return;
    }
    forgetPass(email)
      .then(() => {
        toast.info("Password reset email sent!");
      })
      .catch((error) => {
        setError(error.code);
        toast.error("Failed to send reset email.");
      });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-base-100 transition-colors duration-500 px-4 pt-30 pb-5 overflow-hidden">
      <title>Login | FoodShare</title>

      {/* Decorative Background Accents - Matching Register */}
      <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="card w-full max-w-md bg-base-100 border border-base-200 shadow-2xl z-10">
        <div className="card-body p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-base-content mb-3 tracking-tight">
              Welcome <span className="text-green-600">Back</span>
            </h1>
            <p className="text-base-content/60 font-medium">
              Log in to manage your donations.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div className="form-control">
              <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="input input-bordered bg-base-200/50 border-base-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all rounded-xl"
                placeholder="name@example.com"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <div className="flex justify-between items-end">
                <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70">
                  Password
                </label>
                <button
                  onClick={handleForgetPass}
                  type="button"
                  className="label-text-alt link link-hover text-green-600 font-semibold mb-2"
                >
                  Forgot password?
                </button>
              </div>
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
              {error && (
                <p className="text-[10px] text-error font-semibold mt-2 px-1 uppercase tracking-tight">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-block bg-green-600 hover:bg-green-700 text-white border-none rounded-xl mt-4 shadow-lg shadow-green-600/20 py-3 h-auto min-h-0 text-base font-bold"
            >
              Sign In
            </button>
          </form>

          <div className="divider text-[10px] font-bold text-base-content/30 my-8">
            OR LOGIN WITH
          </div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-block btn-outline border-base-300 hover:bg-base-200 hover:text-base-content rounded-xl flex items-center justify-center gap-2 h-auto py-3 min-h-0 font-bold"
          >
            <FcGoogle size={20} /> Google
          </button>

          <p className="text-center text-sm font-medium mt-10">
            Don't have an account?{" "}
            <Link
              className="text-green-600 hover:underline font-bold"
              to="/auth/register"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
