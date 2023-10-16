import React, { createContext, useEffect, useState } from 'react';

export const DinnerMealContext = createContext(null);

const MealProviders = ({ children }) => {
    const [meals, setMeals] = useState([]);
    const [singleMeal, setSingleMeal] = useState({});

    useEffect(() => {
        fetch('dinnerMealData.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])

    const handleSingleMeal = id => {
        const singleMealInfo = meals.find(meal => meal.id === id);
        return setSingleMeal(singleMealInfo);
    }

    const mealInfo = {
        meals,
        handleSingleMeal,
        singleMeal
    };

    return (
        <DinnerMealContext.Provider value={mealInfo}>
            {children}
        </DinnerMealContext.Provider>
    );
};

export default MealProviders;