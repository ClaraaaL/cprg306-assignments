"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const item = { name, quantity, category }; // Create item object
    console.log(item);

    alert(`Add Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    // Reset state to initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
      >
        <div className="mb-2">
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item name"
            width={60}
            required
          />
        </div>

        <div class="flex justify-between">
          <div class="p-2 m-4 bg-white flex w-40 rounded-lg ">
            <div class="flex justify-between w-full">
              <span className="text-center">{quantity}</span>
              <div class="flex">
                <button
                  className="w-8 bg-green-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
                  onClick={decrement}
                  disabled={quantity <= 1}
                >
                  -
                </button>

                <button
                  className="w-8 bg-pink-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400  disabled:bg-gray-400 focus:ring-opacity-75 ml-1"
                  onClick={increment}
                  disabled={quantity >= 20}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <select
              id="category"
              className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans mt-4 mr-3"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
}
