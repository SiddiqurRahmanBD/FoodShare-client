import React from "react";
import { Outlet } from "react-router";
import Aside from "../Pages/Aside";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      <Aside />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center px-8 shrink-0 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
              FoodShare
            </h1>
            <span className="hidden sm:block text-slate-300 dark:text-slate-700">
            </span>
            <span className="hidden sm:block text-sm font-medium text-slate-500 dark:text-slate-400">
              Dashboard
            </span>
          </div>

        </header>
        <div className="p-8 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
