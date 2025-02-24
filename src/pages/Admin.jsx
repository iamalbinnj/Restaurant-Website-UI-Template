import { useState, useEffect } from "react";

import PopUp from "../Components/PopUp/PopUp";

function Admin() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("products")) || {}
  );
  const [products, setProducts] = useState([]);
  const [popup, setpopup] = useState({ open: false, key: "", productId: "" });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || {};
    setProducts(Object.values(storedProducts));
  }, [items]);

  const handleProductUpdate = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || {};
    setItems(storedProducts);
  };

  return (
    <>
      <div className="container max-w-screen-2x1 mx-auto xl:px-24 py-16">
        <div className="flex justify-end px-4 py-2">
          <button
            onClick={() => setpopup({ open: true, key: "add", productId: "" })}
            className="primary-button w-20 h-10"
          >
            Add
          </button>
        </div>
        <table className="w-full border-collapse border border-gray shadow-lg rounded-lg overflow-hidden">
          <thead className="text-gray uppercase text-sm font-semibold">
            <tr>
              <th className="border border-gray px-4 py-2 text-left">SL NO</th>
              <th className="border border-gray px-4 py-2 text-left">Categories</th>
              <th className="border border-gray px-4 py-2 text-left">Product Name</th>
              <th className="border border-gray px-4 py-2 text-left">View</th>
              <th className="border border-gray px-4 py-2 text-left">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray">
            {products.length === 0 ? (
              <>No Products</>
            ) : (
              <>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="border border-gray px-4 py-2">{index + 1}</td>
                    <td className="border border-gray px-4 py-2">{product.category}</td>
                    <td className="border border-gray px-4 py-2">{product.title}</td>
                    <td className="border border-gray px-4 py-2">
                      <button
                        onClick={() => setpopup({ open: true, key: "edit", productId: product.id })}
                        className="primary-button w-15"
                      >
                        Edit
                      </button>
                    </td>
                    <td className="border border-gray px-4 py-2">
                      <button className="primary-button !bg-secondary w-15">Delete</button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
        <PopUp
          openPopUp={popup.open}
          closePopUp={() => setpopup({ open: false, key: "", productId: "" })}
          keyType={popup.key}
          productId={popup.productId}
          onProductUpdate={handleProductUpdate}
        />
      </div>
    </>
  );
}

export default Admin;