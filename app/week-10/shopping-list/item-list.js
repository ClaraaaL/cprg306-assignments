"use client";
import Item from "./item";
import { useState } from "react";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div>
        <label htmlFor="sort" className="text-white ml-6">
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

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;