import React from "react";
import {
  Heart,
  Users,
  UtensilsCrossed,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const SecondStat = () => {
  const stats = [
    {
      label: "Foods Donated",
      value: "1,200+",
      icon: <UtensilsCrossed className="w-8 h-8" />,
      desc: "Nutritious meals shared",
      themeColor: "from-green-500 to-emerald-600",
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconText: "text-green-600 dark:text-green-400",
    },
    {
      label: "Families Helped",
      value: "850+",
      icon: <Heart className="w-8 h-8" />,
      desc: "Impacted local lives",
      themeColor: "from-rose-500 to-pink-600",
      iconBg: "bg-rose-100 dark:bg-rose-900/30",
      iconText: "text-rose-600 dark:text-rose-400",
    },
    {
      label: "Active Donors",
      value: "300+",
      icon: <Users className="w-8 h-8" />,
      desc: "Generous members",
      themeColor: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconText: "text-blue-600 dark:text-blue-400",
    },
  ];

  return (
    <section className="py-24 bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Simplified Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-base-200 dark:bg-slate-800 text-base-content/70 text-xs font-bold tracking-widest uppercase mb-6">
            <Sparkles size={14} className="text-green-600" />
            Live Statistics
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-base-content tracking-tight mb-4">
            Our Collective{" "}
            <span className="text-green-600 dark:text-green-500">Impact</span>
          </h2>
          <p className="text-base-content/60 text-lg max-w-xl mx-auto">
            Real numbers reflecting real change in our local community.
          </p>
        </div>

        {/* Clean Stats Grid (No Cards/Borders) */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center transition-all duration-500"
            >
              {/* Floating Icon with no box background */}
              <div
                className={`mb-6 p-4 rounded-2xl ${stat.iconBg} ${stat.iconText} group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-sm`}
              >
                {stat.icon}
              </div>

              {/* Massive Minimalist Value */}
              <div className="relative">
                <span className="text-6xl font-black text-base-content tracking-tighter">
                  {stat.value}
                </span>
                {/* Subtle Decorative Dot */}
                <div
                  className={`absolute -top-1 -right-4 w-3 h-3 rounded-full bg-gradient-to-r ${stat.themeColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-current`}
                ></div>
              </div>

              <div
                className={`text-xl font-bold mt-2 mb-3 tracking-wide text-base-content/80 group-hover:text-green-600 transition-colors`}
              >
                {stat.label}
              </div>

              <p className="text-base-content/50 font-medium max-w-[200px] leading-relaxed">
                {stat.desc}
              </p>

              {/* Minimalist divider that appears on hover */}
              <div
                className={`mt-6 h-1 w-0 group-hover:w-12 rounded-full bg-gradient-to-r ${stat.themeColor} transition-all duration-500`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondStat;
