import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate, NavLink, Link } from "react-router";
import {
  Home,
  Utensils,
  ClipboardList,
  LogOut,
  Menu,
  Sun,
  Moon,
  Contact,
  LayoutDashboard,
} from "lucide-react";
import Logo from "./Logo";
import { useTheme } from "next-themes";
import { FcAbout } from "react-icons/fc";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      toast.success("Logged Out successfully");
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error("Failed to logout");
    }
  };

  const closeDropdown = () => {
    const elem = document.activeElement;
    if (elem) elem.blur();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={closeDropdown}
          className={({ isActive }) =>
            `flex items-center gap-2 font-bold px-4 py-2 rounded-xl transition-all ${
              isActive
                ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400"
                : "text-base-content/80 hover:bg-base-200 hover:text-green-700"
            }`
          }
        >
          <Home size={18} /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/available-foods"
          onClick={closeDropdown}
          className={({ isActive }) =>
            `flex items-center gap-2 font-bold px-4 py-2 rounded-xl transition-all ${
              isActive
                ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400"
                : "text-base-content/80 hover:bg-base-200 hover:text-green-700"
            }`
          }
        >
          <Utensils size={18} /> Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          onClick={closeDropdown}
          className={({ isActive }) =>
            `flex items-center gap-2 font-bold px-4 py-2 rounded-xl transition-all ${
              isActive
                ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400"
                : "text-base-content/80 hover:bg-base-200 hover:text-green-700"
            }`
          }
        >
          <FcAbout size={18} /> About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          onClick={closeDropdown}
          className={({ isActive }) =>
            `flex items-center gap-2 font-bold px-4 py-2 rounded-xl transition-all ${
              isActive
                ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400"
                : "text-base-content/80 hover:bg-base-200 hover:text-green-700"
            }`
          }
        >
          <Contact size={18} /> Contact
        </NavLink>
      </li>
    </>
  );

  if (!mounted) return <div className="h-20 w-full bg-base-100"></div>;

  return (
    <div className="fixed top-0 z-[1000] w-full bg-base-100 text-base-content border-b border-base-200 shadow-sm py-2">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-2 text-green-700"
            >
              <Menu size={28} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-base-100 rounded-[2rem] w-64 border border-base-200 gap-2"
            >
              {navLinks}
            </ul>
          </div>

          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="btn btn-ghost btn-circle text-base-content hover:bg-base-200"
          >
            {theme === "dark" ? (
              <Sun size={22} className="text-yellow-400" />
            ) : (
              <Moon size={22} />
            )}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="p-1 border-2 border-base-200 rounded-full hover:border-green-600 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-4 z-[1] p-4 shadow-2xl bg-base-100 rounded-3xl w-72 border border-base-200"
              >
                <div className="px-4 py-3 mb-2 border-b border-base-200 text-center">
                  <p className="font-black text-base-content text-lg truncate">
                    {user?.displayName || "User"}
                  </p>
                  <p className="text-xs font-bold text-green-600 truncate">
                    {user?.email}
                  </p>
                </div>
                <li>
                  <NavLink
                    to="/dashboard"
                    onClick={closeDropdown}
                    className="flex items-center gap-2 py-3 hover:bg-base-200 rounded-xl"
                  >
                    <LayoutDashboard size={18} /> Dashboard
                  </NavLink>
                </li>

                <li>
                  <button
                    onClick={() => {
                      closeDropdown();
                      handleLogout();
                    }}
                    className="btn bg-green-700 text-white w-full mt-4 rounded-xl"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="btn bg-green-700 text-white font-bold rounded-xl px-6 md:px-8 shadow-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
