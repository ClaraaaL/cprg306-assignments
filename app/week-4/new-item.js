"use client";
import { useState } from "react";

export default function Counter() {
  const [quantity, setQuantity] = useState(1);

  //quantity  is the current value of the state
  //setQuantity is the function that update the state

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

 

  return (
    <div class="p-2 m-4 bg-white flex w-40">
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
  );
}
