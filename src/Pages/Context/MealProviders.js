import React, { createContext, useEffect, useState } from 'react';

export const DinnerMealContext = createContext(null);

const MealProviders = ({ children }) => {
    // All necessary states
    const [meals, setMeals] = useState([]);
    const [singleMeal, setSingleMeal] = useState({});
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(55);

    // Cart Quantity handler with price update functions
    const priceHandler = () => setPrice(prevPrice => quantity * 55);

    const qtyHandler = add => {
        add ? setQuantity(prevQuantity => quantity + 1) : quantity > 1 && setQuantity(prevQuantity => prevQuantity - 1)
    }

    useEffect(() => {
        priceHandler();
    }, [quantity]);

    // console.log(cart);

    useEffect(() => {
        fetch('dinnerMealData.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])

    // Function for meal details info
    const handleSingleMeal = id => {
        const singleMealInfo = meals.find(meal => meal.id === id);
        return setSingleMeal(singleMealInfo);
    }

    // Food Adding to cart function
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
        setMessage,
        qtyHandler,
        priceHandler,
        quantity,
        price
    };

    return (
        <DinnerMealContext.Provider value={mealInfo}>
            {children}
        </DinnerMealContext.Provider>
    );
};

export default MealProviders;