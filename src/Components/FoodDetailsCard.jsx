import React, { useContext, useState } from "react";
import {
  MapPin,
  Calendar,
  Package,
  StickyNote,
  Send,
  X,
  Phone,
  CheckCircle,
  AlertCircle,
  User,
} from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const FoodDetailsCard = ({ detail }) => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);

  if (!detail)
    return (
      <div className="flex justify-center my-20">
        <span className="loading loading-spinner loading-lg text-green-700"></span>
      </div>
    );

  const {
    foodImage,
    foodName,
    donatorName,
    donatorImage,
    quantity,
    pickupLocation,
    expireDate,
    additionalNotes,
    food_status,
    status,
    _id,
  } = detail;

  const handleRequestFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const reason = form.reason.value;
    const contact = form.contact.value;

    const info = {
      location,
      reason,
      contact,
      userEmail: user?.email,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      foodId: _id,
      status: "pending",
    };

    axios
      .post(
        "https://assignment-10-server-beta-lime.vercel.app/request-food",
        info
      )
      .then(() => {
        toast.success("Food requested successfully!");
        setShowModal(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to send request.");
      });
  };

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-green-100/50 overflow-hidden border border-green-50">
        {/* TOP: Image Section */}
        <div className="relative h-[300px] md:h-[450px] overflow-hidden">
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* Status Badge */}
          <div className="absolute top-6 left-6">
            <span className="bg-green-600/90 backdrop-blur-md text-white px-6 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
              <CheckCircle size={18} /> {status || food_status}
            </span>
          </div>
          {/* Glassmorphism Donator Tag */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-4 rounded-[2rem] flex items-center gap-4 text-white">
              <img
                src={donatorImage}
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
                alt=""
              />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                  Shared By
                </p>
                <p className="font-bold text-lg leading-tight">{donatorName}</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: Information Section */}
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
              {foodName}
            </h2>
            <div className="w-20 h-1.5 bg-green-600 mx-auto rounded-full"></div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-green-50 rounded-3xl border border-green-100 flex flex-col items-center text-center">
              <Package size={28} className="text-green-600 mb-2" />
              <p className="text-xs font-bold text-slate-400 uppercase mb-1">
                Quantity
              </p>
              <p className="font-black text-slate-700">{quantity} Servings</p>
            </div>

            <div className="p-6 bg-orange-50 rounded-3xl border border-orange-100 flex flex-col items-center text-center">
              <Calendar size={28} className="text-orange-500 mb-2" />
              <p className="text-xs font-bold text-slate-400 uppercase mb-1">
                Expires On
              </p>
              <p className="font-black text-slate-700">{expireDate}</p>
            </div>

            <div className="p-6 bg-red-50 rounded-3xl border border-red-100 flex flex-col items-center text-center">
              <MapPin size={28} className="text-red-500 mb-2" />
              <p className="text-xs font-bold text-slate-400 uppercase mb-1">
                Location
              </p>
              <p className="font-black text-slate-700 truncate w-full">
                {pickupLocation}
              </p>
            </div>
          </div>

          {/* Notes */}
          {additionalNotes && (
            <div className="mb-10">
              <h4 className="text-sm font-black text-slate-800 uppercase mb-4 flex items-center gap-2">
                <StickyNote size={18} className="text-green-600" /> Donator's
                Note
              </h4>
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 italic text-slate-600 leading-relaxed shadow-inner">
                "{additionalNotes}"
              </div>
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={() => setShowModal(true)}
            className="w-full py-6 bg-green-700 hover:bg-green-800 text-white font-black text-xl rounded-3xl transition-all shadow-2xl shadow-green-100 flex items-center justify-center gap-4 group"
          >
            Request This Meal
            <Send
              size={22}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* --- FIXED MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-[2000] flex justify-center items-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg relative z-10 flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-8 pb-4 shrink-0 flex items-center justify-between border-b border-slate-50">
              <h3 className="text-2xl font-black text-slate-800">
                Finalize Request
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
              >
                <X size={28} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 pt-6 overflow-y-auto">
              <form onSubmit={handleRequestFood} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2 ml-1">
                    <MapPin size={18} className="text-green-600" /> Your Current
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
                    placeholder="Enter your pickup location..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2 ml-1">
                    <StickyNote size={18} className="text-green-600" /> Message
                    for {donatorName}
                  </label>
                  <textarea
                    name="reason"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
                    placeholder="Why would you like to request this food?"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2 ml-1">
                    <Phone size={18} className="text-green-600" /> Contact
                    Number
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
                    placeholder="01XXXXXXXXX"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-green-700 hover:bg-green-800 text-white font-black rounded-2xl transition-all shadow-xl shadow-green-100 mt-4 flex items-center justify-center gap-3"
                >
                  Send Request <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetailsCard;
