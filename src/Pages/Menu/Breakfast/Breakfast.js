import React, { useEffect, useState } from 'react';
import BreakfastMeal from './BreakfastMeal/BreakfastMeal';

const Breakfast = () => {
    const [meals, setMeals] = useState([]);
    // console.log(meals);
    useEffect(() => {
        fetch('breakfastMealData.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                {
                    meals.map(meal => <BreakfastMeal
                        key={meal.id}
                        meal={meal}
                    ></BreakfastMeal>)
                }
            </div>
        </div>
    );
};

export default Breakfast;