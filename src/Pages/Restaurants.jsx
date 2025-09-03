import { useState } from "react";
import { Plus, Edit, Trash } from "lucide-react";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: "Pizza Hut", location: "New Delhi", status: "Active" },
    { id: 2, name: "Domino’s", location: "Mumbai", status: "Inactive" },
    { id: 3, name: "Burger King", location: "Bangalore", status: "Active" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    location: "",
    status: "Active",
    image: "",
  });

  // Add restaurant handler
  const handleAddRestaurant = (e) => {
    e.preventDefault();
    setRestaurants([
      ...restaurants,
      { id: restaurants.length + 1, ...newRestaurant },
    ]);
    setNewRestaurant({ name: "", location: "", status: "Active" });
    setShowForm(false);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Restaurants</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        >
          <Plus size={18} />
          Add Restaurant
        </button>
      </div>

      {/* Restaurants Table */}
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-2">#</th>
            <th className="pb-2">Name</th>
            <th className="pb-2">Location</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((rest, index) => (
            <tr key={rest.id} className="border-b last:border-none">
              <td className="py-2">{index + 1}</td>
              <td>{rest.name}</td>
              <td>{rest.location}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    rest.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {rest.status}
                </span>
              </td>
              <td className="flex gap-3">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit size={18} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Restaurant Form (Modal) */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add Restaurant</h3>
            <form onSubmit={handleAddRestaurant} className="space-y-4">
              <input
                type="text"
                placeholder="Restaurant Name"
                value={newRestaurant.name}
                onChange={(e) =>
                  setNewRestaurant({ ...newRestaurant, name: e.target.value })
                }
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={newRestaurant.location}
                onChange={(e) =>
                  setNewRestaurant({
                    ...newRestaurant,
                    location: e.target.value,
                  })
                }
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
              <select
                value={newRestaurant.status}
                onChange={(e) =>
                  setNewRestaurant({ ...newRestaurant, status: e.target.value })
                }
                className="w-full border px-3 py-2 rounded-lg"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurants;
