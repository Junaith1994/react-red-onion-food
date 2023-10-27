import React, { createContext, useEffect, useState } from 'react';

export const DinnerMealContext = createContext(null);

const MealProviders = ({ children }) => {
    const [meals, setMeals] = useState([]);
    const [singleMeal, setSingleMeal] = useState({});
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState('');
    // const messageTimeout = setTimeout(setMessage(''), 5000);
    console.log(cart);

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
        const exixstingItem = cart.find(meal => meal.id === item.id);
        if (!exixstingItem) {
            newCart = [...cart, item];
            return setCart(newCart);
        }
        else {
            setMessage("Item already exist in the cart !")
            setTimeout(() => {
                setMessage('');
            }, 4000);
        }

    }

    const mealInfo = {
        meals,
        handleSingleMeal,
        singleMeal,
        handleFoodCart,
        cart,
        message,
        setMessage
    };

    return (
        <DinnerMealContext.Provider value={mealInfo}>
            {children}
        </DinnerMealContext.Provider>
    );
};

export default MealProviders;