import React, { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Margherita Pizza", price: 250, status: "Available" },
    { id: 2, name: "Veg Burger", price: 120, status: "Unavailable" },
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) return;

    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        status: "Available",
      },
    ]);
    setNewProduct({ name: "", price: "" });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Products</h1>

      {/* Add New Product */}
      <div className="bg-white p-4 shadow rounded-xl flex gap-2">
        <input
          className="border p-2 rounded w-1/3"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          type="number"
          className="border p-2 rounded w-1/4"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleAddProduct}
        >
          Add
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow rounded-xl flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">₹{product.price}</p>
              <span
                className={`px-2 py-1 text-sm rounded ${
                  product.status === "Available"
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {product.status}
              </span>
            </div>
            <button
              className="bg-red-600 text-white px-3 py-1 mt-3 rounded"
              onClick={() => handleDeleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
