"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
//import { useRouter } from 'next/router';

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();
  // const router = useRouter();
  const [showShoppingList, setShowShoppingList] = useState(false);

  const loadItems = async () => {
    if (!user?.uid) return; // Ensure user is logged in
    try {
      const fetchedItems = await getItems(user.uid); // Fetch items
      setItems(fetchedItems); // Update state with fetched items
    } catch (error) {
      console.error("Failed to load items:", error); // Handle error
    }
  };

  const handleAddItem = async (item) => {
    if (!user?.uid) return;
    try {
      const newItemId = await addItem(user.uid, item);
      const newItem = { id: newItemId, ...item };
      setItems((prevItems) => [...prevItems, newItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
    setSelectedItemName(cleanedName);
  };

  useEffect(() => {
    if (user?.uid) {
      localStorage.setItem("userId", user.uid);
      loadItems();
      setShowShoppingList(true);
    } else {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        loadItems();
        setShowShoppingList(true);
      } else {
        setShowShoppingList(false);
      }
    }
  }, [user]);

  return (
    <main className="bg-black">
      <h1 className="text-3xl font-bold m-2 text-white">Shopping List</h1>
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
