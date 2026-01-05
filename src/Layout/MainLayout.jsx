import React from "react";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar ";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 min-h-screen w-11/12 mt-30 mx-auto md:px-8">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default MainLayout;
