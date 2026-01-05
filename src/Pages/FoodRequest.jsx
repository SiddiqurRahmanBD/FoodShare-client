import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

const FoodRequest = () => {
  const [requests, setRequests] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://assignment-10-server-beta-lime.vercel.app/request-foods?email=${user.email}`
        )
        .then((res) => setRequests(res.data))
        .catch((err) => console.log(err));
    }
  }, [user?.email]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-slate-800">
          My Food Requests
        </h2>
        <p className="text-slate-500 mt-2">
          Track the status of your requested food items.
        </p>
      </div>

      {/* Content */}
      {requests.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
          <p className="text-xl font-bold text-slate-400">
            No requests found yet.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-[2rem] shadow-xl shadow-slate-100 border border-slate-100">
          <table className="table w-full">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="py-5 px-6">Donator</th>
                <th>Location</th>
                <th>Reason</th>
                <th>Contact</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr
                  key={req._id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={req.userPhoto}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                        alt=""
                      />
                      <div>
                        <p className="font-bold text-slate-800">
                          {req.userName}
                        </p>
                        <p className="text-xs text-slate-500">
                          {req.userEmail}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-slate-600">{req.location}</td>
                  <td className="text-slate-600 max-w-xs truncate">
                    {req.reason}
                  </td>
                  <td className="text-slate-600">{req.contact}</td>
                  <td>
                    <span
                      className={`badge badge-lg border-none py-4 px-4 font-bold capitalize ${
                        req.status === "pending"
                          ? "bg-amber-100 text-amber-700"
                          : req.status === "accepted"
                          ? "bg-green-100 text-green-700"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FoodRequest;
