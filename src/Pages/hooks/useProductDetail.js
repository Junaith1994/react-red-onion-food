import React, { useEffect, useState } from 'react';

const useProductDetail = () => {
    const [meals, setMeals] = useState([]);
    const [mealDetails, setMealDetails] = useState({});
    console.log(mealDetails);
    useEffect(() => {
        fetch('dinnerMealData.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])

    const handleSingleMeal = id => {
        const singleMealInfo = meals.find(meal => meal.id === id);
        // console.log(singleMealInfo);
        setMealDetails(singleMealInfo);
    }

    return {meals, handleSingleMeal}
};

export default useProductDetail;