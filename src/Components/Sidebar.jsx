import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Utensils,
  Package,
  Truck,
  Wallet,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
    { name: "Orders", path: "/orders", icon: <ShoppingCart size={20} /> },
    { name: "Categories", path: "/Pages/Categories", icon: <Package size={20}/>},

    { name: "Restaurants", path: "/Pages/Restaurants", icon: <Utensils size={20} /> },
    { name: "Products", path: "/Pages/product", icon: <Package size={20} /> },
    { name: "Deliveries", path: "/deliveries", icon: <Truck size={20} /> },
    { name: "Payouts", path: "/payouts", icon: <Wallet size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      {/* Logo / Title */}
      <div className="p-6 border-b border-gray-700 flex items-center justify-center">
        <h1 className="text-xl font-bold">Admin</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 mb-2 rounded-lg transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 text-xs text-gray-400 text-center">
        © 2025 Admin
      </div>
    </aside>
  );
};

export default Sidebar;
