import React, { createContext, useEffect, useState } from 'react';

export const BreakfastMealContext = createContext(null);

const BreakfastProviders = ({ children }) => {
    const [breakfastMeals, setBreakfastMeals] = useState([]);
    const [singleMeal, setSingleMeal] = useState({});

    useEffect(() => {
        fetch('breakfastMealData.json')
            .then(res => res.json())
            .then(data => setBreakfastMeals(data))
    }, [])

    // Single meal info after click
    const handleSingleMeal = id => {
        const singleMealInfo = breakfastMeals.find(meal => meal.id === id);
        return setSingleMeal(singleMealInfo);
    }

    const breakfastMealInfo = {
        breakfastMeals,
        handleSingleMeal,
        singleMeal
    };

    return (
        <BreakfastMealContext.Provider value={breakfastMealInfo}>
            {children}
        </BreakfastMealContext.Provider>
    );
};

export default BreakfastProviders;