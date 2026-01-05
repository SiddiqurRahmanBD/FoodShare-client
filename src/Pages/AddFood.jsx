import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import {
  PlusCircle,
  Image as ImageIcon,
  MapPin,
  Calendar,
  ClipboardList,
} from "lucide-react";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddFood = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const newFood = {
      foodName: form.foodName.value,
      foodImage: form.foodImage.value,
      quantity: Number(form.quantity.value),
      pickupLocation: form.pickupLocation.value,
      expireDate: form.expireDate.value,
      additionalNotes: form.notes.value,
      food_status: "Available",
      donatorName: user?.displayName,
      donatorEmail: user?.email,
      donatorImage: user?.photoURL,
      createdAt: new Date(),
    };

    try {
      await axios.post(
        "https://assignment-10-server-beta-lime.vercel.app/add-food",
        newFood
      );
      toast.success("Food added successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to add food. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-16 px-4">
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-green-100/50 p-8 md:p-12 border border-green-50">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex p-4 bg-green-50 rounded-3xl text-green-600 mb-4">
            <PlusCircle size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800">
            Share Your Food
          </h2>
          <p className="text-slate-500 mt-2">
            Fill in the details to help someone in need today.
          </p>
        </div>

        <form
          onSubmit={handleAddFood}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Read-Only Donator Info */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-3xl border border-slate-100">
            <div className="text-xs font-bold text-slate-400 uppercase px-2">
              Donator:{" "}
              <span className="text-slate-700 ml-1">{user?.displayName}</span>
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase px-2">
              Email: <span className="text-slate-700 ml-1">{user?.email}</span>
            </div>
          </div>

          {/* Food Details */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-2">
              Food Name
            </label>
            <input
              type="text"
              name="foodName"
              required
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
              placeholder="e.g. Fresh Apples"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-2">
              Food Image URL
            </label>
            <input
              type="text"
              name="foodImage"
              required
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
              placeholder="https://image-link.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-2">
              Quantity (Servings)
            </label>
            <input
              type="number"
              name="quantity"
              min="1"
              max="50"
              required
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
              placeholder="10"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-2">
              Expiry Date
            </label>
            <input
              type="date"
              name="expireDate"
              required
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-2">
              Pickup Location
            </label>
            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-6 top-5 text-slate-400"
              />
              <input
                type="text"
                name="pickupLocation"
                required
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
                placeholder="House 12, Road 5, Dhaka"
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-2">
              Additional Notes
            </label>
            <textarea
              name="notes"
              rows="3"
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
              placeholder="Any specific instructions for the recipient..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 w-full py-5 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 text-white font-black text-lg rounded-2xl transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <>
                Add Food to List <PlusCircle size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
