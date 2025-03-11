"use client";

import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
}

const API_URL = "http://localhost:5000/api/v1/category"; 

const Admin: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editCategory, setEditCategory] = useState<Category | null>(null);
  const [newCategory, setNewCategory] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAdd = async () => {
    if (!newCategory) return;
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategory }),
      });

      if (!response.ok) throw new Error("Failed to add category");
      const data = await response.json();
      setCategories([...categories, data.category]);
      setNewCategory("");
    } catch (error) {
      alert("Error adding category: " + (error as Error).message);
    }
  };
  const handleEdit = (category: Category) => {
    setEditCategory(category);
  };
  const handleSave = async () => {
    if (!editCategory) return;
    try {
      const response = await fetch(`${API_URL}/${editCategory.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: editCategory.name }),
      });

      if (!response.ok) throw new Error("Failed to update category");
      setCategories(categories.map((c) => (c.id === editCategory.id ? editCategory : c)));
      setEditCategory(null);
    } catch (error) {
      alert("Error updating category: " + (error as Error).message);
    }
  };
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete category");
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      alert("Error deleting category: " + (error as Error).message);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Enter category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button onClick={handleAdd} className="bg-primary text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      {loading ? (
        <p>Loading categories...</p>
      ) : error ? (
        <p className="text-secondary">Error: {error}</p>
      ) : (
        <table className="w-full border-collapse border border-gray">
          <thead>
            <tr className="bg-gray">
              <th className="border p-2">ID</th>
              <th className="border p-2">Category Name</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b">
                <td className="border p-2">{category.id}</td>
                <td className="border p-2">
                  {editCategory?.id === category.id ? (
                    <input
                      type="text"
                      value={editCategory.name}
                      onChange={(e) => setEditCategory({ ...editCategory, name: e.target.value })}
                      className="border p-2 w-full rounded"
                    />
                  ) : (
                    category.name
                  )}
                </td>
                <td className="border p-2 flex justify-center gap-2">
                  {editCategory?.id === category.id ? (
                    <>
                      <button onClick={handleSave} className="bg-blue text-white px-3 py-1 rounded">
                        Save
                      </button>
                      <button onClick={() => setEditCategory(null)} className="bg-gray text-white px-3 py-1 rounded">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(category)} className="bg-primary text-white px-3 py-1 rounded">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(category.id)} className="bg-secondary text-white px-3 py-1 rounded">
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
