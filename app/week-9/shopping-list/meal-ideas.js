"use client"

import { useState, useEffect } from "react";


async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Failed to fetch meal ideas:", error);
        return [];
    }
}

export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    useEffect(() => {
        if (ingredient) {
            console.log("Fetching meal ideas for ingredient:", ingredient);
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h3 className="text-white font-bold">Meal Ideas</h3>
            <p className="text-white">{ingredient && meals.length > 0
                    ? `Here are some meal ideas using ${ingredient}:`
                    : ingredient
                    ? `No meal ideas found for ${ingredient}`
                    : "Please select an ingredient"}</p>
            <ul>
                {meals.map(meal => (
                    <li className="p-2 m-1 text-yellow-50 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
                    key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}

