import React, { useEffect, useState } from 'react';
import LunchMeal from './LunchMeal/LunchMeal';

const Lunch = () => {
    const [meals, setMeals] = useState([]);
    // console.log(meals);
    useEffect(() => {
        fetch('lunchMealData.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])

    return (
        <div className='container mt-5'>
            <div className='row g-3'>
                {
                    meals.map(meal => <LunchMeal
                        key={meal.id}
                        meal={meal}
                    ></LunchMeal>)
                }
            </div>
        </div>
    );
};

export default Lunch; <h1>Lunch</h1>