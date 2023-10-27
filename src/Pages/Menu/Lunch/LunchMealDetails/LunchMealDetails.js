import React from 'react';
import { useContext } from 'react';
import { LunchMealContext } from '../../../Context/LunchProviders';

const LunchMealDetails = () => {
    const { singleMeal } = useContext(LunchMealContext);
    console.log(singleMeal);
    return (
        <div>
            <h2>Lunch Meal Details</h2>
        </div>
    );
};

export default LunchMealDetails;