import React from "react";

export const MealCard = ({meal}) => {
    return(
        <div className="border border-gray-300 rounded p-4">
            <h3 className="fon-bold">{meal?.strMeal}</h3>
            <img src={meal?.strMealThumb} className="mb-2" alt={meal?.strMeal} />
            <p><span className="font-bold"></span> {meal?.strInstructions}</p>
            <p><span className="font-bold"></span>{meal?.Category}</p>
        </div>
    )
}