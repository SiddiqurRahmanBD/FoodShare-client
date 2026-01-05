import React from "react";
import { Heart, Globe, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Compassion First",
      desc: "We believe that access to nutritious food is a fundamental human right, not a privilege.",
    },
    {
      icon: <Globe className="w-6 h-6 text-green-600" />,
      title: "Sustainability",
      desc: "By redirecting surplus food, we reduce environmental waste and protect our planet.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      title: "Transparency",
      desc: "Every donation is tracked and verified to ensure it reaches those who need it most.",
    },
    {
      icon: <Users className="w-6 h-6 text-amber-500" />,
      title: "Community Driven",
      desc: "We are a platform built by the people, for the people, powered by local generosity.",
    },
  ];

  return (
    <div className="bg-base-100 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Glow effect for background depth */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/5 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-bold tracking-widest uppercase mb-6 inline-block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-base-content tracking-tight mb-8">
            Bridging the gap between <br />
            <span className="text-green-600">Surplus</span> and{" "}
            <span className="text-emerald-500">Shortage</span>
          </h1>
          <p className="text-base-content/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Founded in 2024, FoodShare was born out of a simple observation:
            massive amounts of perfectly good food are wasted every day, while
            families in our own neighborhoods go hungry. We decided to build a
            bridge.
          </p>
        </div>
      </section>

      {/* Mission/Image Section */}
      <section className="py-16 bg-base-200/40 border-y border-base-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-base-300">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000"
                alt="Community sharing food"
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-base-content tracking-tight leading-tight">
              A Platform Built on <br />
              <span className="text-green-600 underline decoration-green-500/30 decoration-4 underline-offset-8">
                Trust & Transparency
              </span>
            </h2>
            <p className="text-base-content/70 text-lg leading-relaxed font-medium">
              FoodShare is more than just a donation site. It is a decentralized
              community where restaurants, supermarkets, and individuals can
              list surplus food, and local volunteers or families can claim it
              in real-time.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="border-l-4 border-green-500 pl-5">
                <h4 className="font-black text-3xl text-base-content tracking-tighter">
                  50k+
                </h4>
                <p className="text-base-content/50 text-xs font-bold uppercase tracking-widest mt-1">
                  Meals Redirected
                </p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-5">
                <h4 className="font-black text-3xl text-base-content tracking-tighter">
                  12k
                </h4>
                <p className="text-base-content/50 text-xs font-bold uppercase tracking-widest mt-1">
                  Verified Donors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-base-content mb-4 tracking-tight">
            Our Core Values
          </h2>
          <div className="h-1.5 w-24 bg-green-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-8 rounded-[2rem] bg-base-100 border border-base-200 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/5 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-base-content tracking-tight">
                {v.title}
              </h3>
              <p className="text-base-content/60 leading-relaxed text-sm font-medium">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-green-600 p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-green-600/30">
          {/* Leaf Texture Overlay */}
        
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
              Ready to make an <br className="hidden md:block" /> impact today?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/available-foods"
                className="btn bg-white text-green-600 hover:bg-white/90 border-none px-10 h-14 rounded-2xl font-bold text-lg group w-full sm:w-auto"
              >
                Browse Food{" "}
                <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-outline border-2 border-white/40 text-white hover:bg-white hover:text-green-600 hover:border-white px-10 h-14 rounded-2xl font-bold text-lg w-full sm:w-auto"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
