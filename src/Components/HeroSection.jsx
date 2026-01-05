import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

import slider1 from '../assets/slide1.jpg';
import slider2 from '../assets/slide2.jpg';
import slider3 from '../assets/slide3.jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image:
       slider1,
      title: "Share Food, <span class='text-green-500'>Spread Kindness</span>",
      description:
        "Join our community of givers and help ensure no one goes hungry tonight.",
    },
    {
      id: 2,
      image:
       slider2,
      title: "No Waste, <span class='text-orange-500'>Just Help</span>",
      description:
        "Every meal shared is a step toward a world with zero food waste.",
    },
    {
      id: 3,
      image:
       slider3,
      title: "Make a <span class='text-green-500'>Difference Today</span>",
      description:
        "Your contribution matters more than you know. Start sharing now.",
    },
  ];

  return (
    <div className="relative h-[500px] md:h-[650px] rounded-2xl w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full w-full mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] scale-110"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
              </div>

              <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center gap-2 text-green-400 font-bold uppercase tracking-widest mb-4"
                  >
                    <Heart size={20} fill="currentColor" />
                    <span>FoodShare Community</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <button className="btn bg-green-600 hover:bg-green-700 border-none text-white px-10 rounded-2xl text-lg font-bold shadow-2xl shadow-green-900/20 group">
                      Donate Now
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
