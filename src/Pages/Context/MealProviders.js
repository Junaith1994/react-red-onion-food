import React, { createContext, useEffect, useState } from 'react';

export const DinnerMealContext = createContext(null);

const MealProviders = ({ children }) => {
    const [meals, setMeals] = useState([]);
    const [singleMeal, setSingleMeal] = useState({});
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('dinnerMealData.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])

    const handleSingleMeal = id => {
        const singleMealInfo = meals.find(meal => meal.id === id);
        return setSingleMeal(singleMealInfo);
    }

    const handleFoodCart = item => {
        let newCart = [];
        // const exixstingItem = cart.find(meal => meal?.mealName === item?.mealName);
        // console.log(exixstingItem);
        newCart = [...cart, item];
        return setCart(newCart);

    }

    const mealInfo = {
        meals,
        handleSingleMeal,
        singleMeal,
        handleFoodCart,
        cart
    };

    return (
        <DinnerMealContext.Provider value={mealInfo}>
            {children}
        </DinnerMealContext.Provider>
    );
};

export default MealProviders;