import React, { useContext, useEffect, useState } from 'react';
import BreakfastMeal from './BreakfastMeal/BreakfastMeal';
import { BreakfastMealContext } from '../../Context/BreakfastProviders';

const Breakfast = () => {
    const { breakfastMeals } = useContext(BreakfastMealContext);
    
    return (
        <div className='container mt-5'>
            <div className='row g-3'>
                {
                    breakfastMeals.map(meal => <BreakfastMeal
                        key={meal.id}
                        meal={meal}
                    ></BreakfastMeal>)
                }
            </div>
        </div>
    );
};

export default Breakfast;