"use client"; 

import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

const API_URL = "https://fakestoreapi.com/products"; 

const AdminPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editProduct, setEditProduct] = useState<Product | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete product");
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      alert("Error deleting product: " + (error as Error).message);
    }
  };


  const handleEdit = (product: Product) => {
    setEditProduct(product);
  };

  const handleSave = async () => {
    if (!editProduct) return;
    try {
      const response = await fetch(`${API_URL}/${editProduct.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editProduct),
      });
      if (!response.ok) throw new Error("Failed to update product");
      setProducts(products.map((p) => (p.id === editProduct.id ? editProduct : p)));
      setEditProduct(null);
    } catch (error) {
      alert("Error updating product: " + (error as Error).message);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="text-center border-b">
                <td className="border p-2">{product.id}</td>
                <td className="border p-2">{product.category}</td>
                <td className="border p-2 flex justify-center gap-2">
                  <button onClick={() => handleEdit(product)} className="text-primary cursor-pointer">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="text-secondary cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}


      {editProduct && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-semibold mb-2">Edit Product</h2>
          <label className="block mb-2">
          Category:
            <input
              type="text"
              value={editProduct.category}
              onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })}
              className="border p-2 w-full rounded"
            />
          </label>
          <button onClick={handleSave} className="bg-primary text-white px-4 py-2 rounded mt-2">
            Save
          </button>
          <button onClick={() => setEditProduct(null)} className="ml-2 bg-secondary text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
