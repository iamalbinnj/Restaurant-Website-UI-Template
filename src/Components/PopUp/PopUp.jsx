import { useState, useEffect } from "react";

function PopUp({ openPopUp, closePopUp, keyType, productId, onProductUpdate }) {
  const [input, setInput] = useState({
    category: "",
    title: "",
    price: "",
    description: "",
    image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating:{
        rate:"3.9",
        count:"120"
    }
  });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    if (keyType === "edit" && productId) {
      const productToEdit = storedProducts.find(
        (product) => product.id === productId
      );
      if (productToEdit) {
        setInput(productToEdit);
      }
    } else {
      setInput({
        category: "",
        title: "",
        price: "",
        description: "",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: "3.9",
          count: "120",
        },
      });
    }
  }, [keyType, productId]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submittedForm = () => {
    if (
      !input.category ||
      !input.title ||
      !input.price ||
      !input.description
    ) {
      alert("Please fill all fields!");
      return;
    }

    let storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    if (keyType === "add") {
      const newProduct = { ...input, id: Date.now() };
      storedProducts.push(newProduct);
    } else if (keyType === "edit" && productId) {
      storedProducts = storedProducts.map((product) =>
        product.id === productId ? { ...input, id: productId } : product
      );
    }

    localStorage.setItem("products", JSON.stringify(storedProducts));
    onProductUpdate(); 
    alert(`Product ${keyType === "add" ? "added" : "updated"} successfully!`);
    closePopUp();
  };

  if (!openPopUp) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-95">
          <div className="flex justify-end">
            <button
              onClick={closePopUp}
              className="text-white bg-secondary hover:bg-secondary cursor-pointer px-3 py-1 rounded-full shadow-md transition-transform transform active:scale-90"
            >
              ✕
            </button>
          </div>
          <h2 className="text-lg font-semibold text-gray text-center mb-4">
            {keyType == "add" ? "Add" : "Edit"} Product
          </h2>
          <div className="space-y-4">
            <label>Category</label>
            <input
              type="text"
              placeholder="Category"
              name="category"
              className="w-full px-4 py-2 border border-gray rounded-lg focus:ring-2 focus:ring-primary outline-none"
              value={input.category}
              onChange={handleChange}
            />
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Product Name"
              name="title"
              className="w-full px-4 py-2 border border-gray rounded-lg focus:ring-2 focus:ring-primary outline-none"
              value={input.title}
              onChange={handleChange}
            />
            <label>Product Price</label>
            <input
              type="text"
              placeholder="Product Price"
              name="price"
              className="w-full px-4 py-2 border border-gray rounded-lg focus:ring-2 focus:ring-primary outline-none"
              value={input.price}
              onChange={handleChange}
            />
            <label>Product Description</label>
            <textarea
              type="text"
              placeholder="Product Description"
              name="description"
              className="w-full px-4 py-2 border border-gray rounded-lg focus:ring-2 focus:ring-primary outline-none"
              value={input.description}
              onChange={handleChange}
            />
            <div className="flex">
              <input type="file" name="" id="" />
              <img
                src="/hero-1.png"
                alt="Product"
                className="w-30 h-30 object-cover rounded-md"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={submittedForm}
                className="w-full primary-button font-bold py-2 rounded-lg shadow-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUp;
