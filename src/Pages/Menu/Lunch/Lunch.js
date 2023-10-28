import React, { useContext, useEffect, useState } from 'react';
import LunchMeal from './LunchMeal/LunchMeal';
import { LunchMealContext } from '../../Context/LunchProviders';

const Lunch = () => {
    const [meals, setMeals] = useState([]);
    const { lunchMeals } = useContext(LunchMealContext); 
    // console.log(meals);
    // useEffect(() => {
    //     fetch('lunchMealData.json')
    //         .then(res => res.json())
    //         .then(data => setMeals(data))
    // }, [])

    return (
        <div className='container mt-5'>
            <div className='row g-3'>
                {
                    lunchMeals.map(meal => <LunchMeal
                        key={meal.id}
                        meal={meal}
                    ></LunchMeal>)
                }
            </div>
        </div>
    );
};

export default Lunch; <h1>Lunch</h1>