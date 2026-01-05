import {
  ClipboardList,
  LayoutDashboard,
  PlusCircle,
  Settings,
} from "lucide-react";
import Logo from "../Components/Logo";
import { Link, NavLink } from "react-router";

const NavItem = ({ icon, label, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
        isActive
          ? "bg-emerald-800 text-white"
          : "text-emerald-100 hover:bg-emerald-800/50"
      }`
    }
  >
    {icon}
    <span className="font-medium">{label}</span>
  </NavLink>
);

const Aside = () => {
  return (
    <div className="h-screen sticky top-0 shrink-0">
      <aside className="w-64 h-full bg-emerald-900 text-white hidden md:flex flex-col">
        <div className="p-6">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <NavItem
            to="/dashboard"
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
          />
          <NavItem
            to="/dashboard/add-food"
            icon={<PlusCircle size={20} />}
            label="Add Food"
          />
          <NavItem
            to="/dashboard/my-food-requests"
            icon={<ClipboardList size={20} />}
            label="My Food Requests"
          />
          <NavItem
            to="/dashboard/manage-my-foods"
            icon={<Settings size={20} />}
            label="Manage My Foods"
          />
        </nav>
      </aside>
    </div>
  );
};

export default Aside;
