"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) => {
    const newItemWithId = {
      ...newItem,
      id: Math.random().toString(36).substring(2, 15),
    };
    setItems((prevItems) => [...prevItems, newItemWithId]);
  };

  return (
    <main className="bg-black ">
      <h1 className="text-3xl font-bold m-2 text-white ">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
