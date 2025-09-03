import { useState } from "react";
import { Plus, Edit, Trash } from "lucide-react";

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Beverages", items: 24 },
    { id: 2, name: "Snacks", items: 18 },
    { id: 3, name: "Main Course", items: 12 },
    { id: 4, name: "Desserts", items: 9 },
  ]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Categories</h2>
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
          <Plus size={18} />
          Add Category
        </button>
      </div>

      {/* Categories Table */}
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-2">#</th>
            <th className="pb-2">Category Name</th>
            <th className="pb-2">Total Items</th>
            <th className="pb-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, index) => (
            <tr key={cat.id} className="border-b last:border-none">
              <td className="py-2">{index + 1}</td>
              <td>{cat.name}</td>
              <td>{cat.items}</td>
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
    </div>
  );
};

export default Categories;
