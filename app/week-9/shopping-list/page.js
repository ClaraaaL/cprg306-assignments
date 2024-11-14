"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const handleAddItem = (newItem) => {
    const newItemWithId = {
      ...newItem,
      id: Math.random().toString(36).substring(2, 15),
    };
    setItems((prevItems) => [...prevItems, newItemWithId]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    setSelectedItemName(cleanedName);
  };

  const { user } = useUserAuth();


  useEffect(() => {
    if (user === null) {
      window.location.href = "/week-9/page";
    }
  }, [user]);

  if (user === null) {
    return null;
  }

  return (
    <main className="bg-black ">
      <h1 className="text-3xl font-bold m-2 text-white ">Shopping List</h1>
      <div className="flex">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
