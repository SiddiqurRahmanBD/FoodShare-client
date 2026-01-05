import React from "react";
import { Calendar, MapPin, Package, ArrowRight, User } from "lucide-react";
import { Link } from "react-router";

const Card = ({ food }) => {
  const {
    foodImage,
    foodName,
    donatorName,
    donatorImage,
    quantity,
    pickupLocation,
    expireDate,
    _id,
  } = food;

  return (
    <div className="group bg-white rounded-[2rem] border border-green-50 shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Image Container with Badge */}
      <div className="relative overflow-hidden h-56">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
          <p className="text-xs font-bold text-green-700 flex items-center gap-1">
            <Package size={14} /> {quantity} Available
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Food Name */}
        <h2 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-green-700 transition-colors">
          {foodName}
        </h2>

        {/* Info Grid */}
        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-center gap-3 text-slate-600">
            <div className="p-2 bg-green-50 rounded-lg text-green-600">
              <Calendar size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Expires On
              </p>
              <p className="text-sm font-semibold">{expireDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-600">
            <div className="p-2 bg-orange-50 rounded-lg text-orange-500">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Pickup Location
              </p>
              <p className="text-sm font-semibold truncate max-w-[180px]">
                {pickupLocation}
              </p>
            </div>
          </div>
        </div>

        {/* Donator Info & Action */}
        <div className="pt-4 border-t border-slate-50 mt-auto">
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  src={donatorImage || "https://via.placeholder.com/40"}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-green-100"
                  alt={donatorName}
                />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <p className="text-xs font-bold text-slate-700 truncate w-24">
                {donatorName}
              </p>
            </div>
            <span className="text-[10px] font-bold py-1 px-2 bg-slate-100 text-slate-500 rounded-md uppercase">
              Donator
            </span>
          </div>

          <Link
            to={`/food-details/${_id}`}
            className="group/btn relative flex items-center justify-center gap-2 w-full py-4 bg-green-700 text-white font-bold rounded-2xl overflow-hidden transition-all hover:bg-green-800 active:scale-95 shadow-lg shadow-green-100"
          >
            <span>View Details</span>
            <ArrowRight
              size={18}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
