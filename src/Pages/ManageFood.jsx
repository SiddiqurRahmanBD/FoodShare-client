import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UserTable from "../Components/UserTable";
import LoadingSpinner from "./LoadingSpinner";
import { Settings2 } from "lucide-react";

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(
        `https://assignment-10-server-beta-lime.vercel.app/manage-foods?email=${user.email}`
      )
      .then((res) => setFoods(res.data))
      .catch((err) => console.log("Fetch Error:", err))
      .finally(() => setLoading(false));
  }, [user?.email]);

  const handleDelete = (id) => {
    // Note: Usually you'd call axios.delete here first, then update state
    const remaining = foods.filter((item) => item._id !== id);
    setFoods(remaining);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex p-3 bg-green-50 rounded-2xl text-green-600 mb-4">
          <Settings2 size={32} />
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
          Manage My Foods
        </h1>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto leading-relaxed">
          Update your donations or remove items that are no longer available.
          Keep your inventory fresh for the community.
        </p>
      </div>

      {/* Main Table Content */}
      {foods.length === 0 ? (
        <div className="text-center py-24 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
          <p className="text-2xl font-bold text-slate-400">
            You haven't added any food yet.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse">
              {/* Table Head */}
              <thead className="bg-slate-50">
                <tr className="text-slate-700 border-none">
                  <th className="py-6 px-8 text-sm font-black uppercase tracking-wider">
                    #No
                  </th>
                  <th className="text-sm font-black uppercase tracking-wider">
                    Food Item
                  </th>
                  <th className="text-sm font-black uppercase tracking-wider">
                    Donator
                  </th>
                  <th className="text-sm font-black uppercase tracking-wider">
                    Email
                  </th>
                  <th className="text-sm font-black uppercase tracking-wider text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-50">
                {foods.map((food, index) => (
                  <UserTable
                    key={food._id}
                    food={food}
                    index={index}
                    onDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageFood;
