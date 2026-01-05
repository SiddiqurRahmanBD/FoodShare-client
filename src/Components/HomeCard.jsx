import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router"; // or 'react-router-dom' depending on your setup
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, LayoutGrid } from "lucide-react";

const HomeCard = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();

    axios
      .get("https://assignment-10-server-beta-lime.vercel.app/foods-home")
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 bg-base-100 transition-colors duration-300">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div
            data-aos="fade-right"
            className="flex items-center gap-2 text-green-700 dark:text-green-500 font-bold uppercase tracking-widest text-sm"
          >
            <LayoutGrid size={20} />
            <span>Featured Selection</span>
          </div>

          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            className="font-black text-4xl md:text-5xl text-base-content leading-tight"
          >
            Choose Your{" "}
            <span className="text-green-700 dark:text-green-500 relative">
              Foods
            </span>
          </h1>

          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-base-content/70 text-lg max-w-xl"
          >
            Explore our community-shared meals, sorted by fresh quantity and
            ready for pickup near you.
          </p>
        </div>

        {/* Desktop Show All Link */}
        <div data-aos="fade-left" className="hidden md:block">
          <Link
            to="/available-foods"
            className="group flex items-center gap-2 font-bold text-green-700 dark:text-green-500 hover:text-green-800 dark:hover:text-green-400 transition-all"
          >
            Explore All Foods
            <span className="p-2 bg-green-50 dark:bg-green-900/20 rounded-full group-hover:bg-green-700 dark:group-hover:bg-green-500 group-hover:text-white transition-all">
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>
      </div>

      {/* Grid Layout */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        data-aos="fade-up"
      >
        {foods.map((food) => (
          <Card key={food._id} food={food} />
        ))}
      </div>

      {/* Mobile Show All Button */}
      <div data-aos="fade-up" className="flex justify-center mt-12 md:hidden">
        <Link
          to="/available-foods"
          className="btn bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-500 border-none text-white px-10 rounded-2xl shadow-xl shadow-green-100 dark:shadow-none flex items-center gap-2"
        >
          Show All Foods <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
