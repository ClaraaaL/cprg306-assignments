"use client";
import Item from "./item";
import { useState } from "react";
import itemsData from "./items.json";

// const myCompare = (a, b) => {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// };

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");
  //console.log(itemsData);
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name); // Sort by name
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category); // Sort by category
    }
    return 0;
  });

  return (
    <div>
      {/* Sort buttons */}
      <div>
        <label for="sort" className="text-white ml-6">
          Sort by:{" "}
        </label>
        <button
          style={{ backgroundColor: sortBy === "name" ? "lightblue" : "" }}
          onClick={() => setSortBy("name")}
          className="bg-orange-500 p-1 m-2 w-28 text-white mb-5"
        >
          Name
        </button>
        <button
          style={{ backgroundColor: sortBy === "category" ? "lightblue" : "" }}
          onClick={() => setSortBy("category")}
          className="bg-orange-500 p-1 m-2 w-28 text-white"
        >
          Category
        </button>
      </div>

      {/* Render the sorted items */}
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
