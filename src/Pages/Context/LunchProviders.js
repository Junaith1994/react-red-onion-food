import React, { createContext, useEffect, useState } from 'react';

export const LunchMealContext = createContext(null);

const LunchProviders = ({ children }) => {
    const [lunchMeals, setLunchMeals] = useState([]);
    const [singleMeal, setSingleMeal] = useState({});

    // Fetching Lunch Data
    useEffect(() => {
        fetch('lunchMealData.json')
            .then(res => res.json())
            .then(data => setLunchMeals(data))
    }, [])

    // Single meal info after click
    const handleSingleMeal = id => {
        const singleMealInfo = lunchMeals.find(meal => meal.id === id);
        return setSingleMeal(singleMealInfo);
    }

    const lunchMealInfo = {
        lunchMeals,
        singleMeal,
        handleSingleMeal
    };

    return (
        <LunchMealContext.Provider value={lunchMealInfo}>
            {children}
        </LunchMealContext.Provider>
    );
};

export default LunchProviders;