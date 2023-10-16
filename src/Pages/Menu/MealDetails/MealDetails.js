import React, { useContext } from 'react';
import { DinnerMealContext } from '../../Context/MealProviders';

const MealDetails = () => {
    const { singleMeal } = useContext(DinnerMealContext);
    console.log(singleMeal);
    
    return (
        <div className='d-flex'>
            <div>
                <h3>{singleMeal?.mealName}</h3>
            </div>
            <div>
                <img className='w-50' src={singleMeal?.imgUrl} alt="" />
            </div>
        </div>
    );
};

export default MealDetails;