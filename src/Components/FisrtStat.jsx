import React from "react";
import { Share2, Search, PackageCheck, ArrowRightCircle } from "lucide-react";

const FisrtStat = () => {
  const steps = [
    {
      title: "Post Food",
      desc: "Donors can add food details such as name, quantity, and pickup location easily.",
      icon: <Share2 className="w-8 h-8" />,
      accent: "from-green-500 to-emerald-600",
      shadow: "shadow-green-500/20",
    },
    {
      title: "Find Food",
      desc: "Users can browse available food items based on location and real-time availability.",
      icon: <Search className="w-8 h-8" />,
      accent: "from-blue-500 to-cyan-600",
      shadow: "shadow-blue-500/20",
    },
    {
      title: "Collect Food",
      desc: "After requesting, simply collect the food from the donor at the specified location.",
      icon: <PackageCheck className="w-8 h-8" />,
      accent: "from-orange-500 to-yellow-600",
      shadow: "shadow-orange-500/20",
    },
  ];

  return (
    <section className="py-24 bg-base-100 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold tracking-wider uppercase mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-base-content tracking-tight mb-6">
            The FoodShare{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Journey
            </span>
          </h2>
          <p className="text-base-content/60 max-w-xl text-lg leading-relaxed">
            Join our mission to reduce waste. We've simplified the path from
            sharing to receiving.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Decorative Background Element (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-base-300 dark:via-slate-700 to-transparent -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="group relative z-10">
              <div className="h-full bg-base-100 dark:bg-slate-900/50 backdrop-blur-xl p-8 md:p-10 rounded-[3rem] border border-base-200 dark:border-slate-800 hover:border-green-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                {/* Icon Glow Effect */}
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-gradient-to-br ${step.accent} text-white mb-8 shadow-2xl ${step.shadow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  {step.icon}
                </div>

                <h3 className="text-2xl font-extrabold mb-4 text-base-content group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-base-content/60 text-lg leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* Action Indicator */}
                <div className="flex items-center gap-2 text-sm font-bold text-green-600 dark:text-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  Learn More <ArrowRightCircle size={18} />
                </div>

                {/* Floating Decorative Circle */}
                <div
                  className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${step.accent} opacity-[0.03] rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FisrtStat;
