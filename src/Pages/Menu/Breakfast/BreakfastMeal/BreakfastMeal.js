import React, { useContext } from 'react';
import './Breakfast.css';
import { useNavigate } from 'react-router-dom';
import { BreakfastMealContext } from '../../../Context/BreakfastProviders';

const BreakfastMeal = ({ meal }) => {
    const { id, img, mealName, mealText, price } = meal;
    // single meal handler from BreakfastProviders
    const { handleSingleMeal } = useContext(BreakfastMealContext);
    const navigate = useNavigate();

    // Breakfast meal details handler
    const mealDetailsHandler = () => {
        navigate(`/breakfastMealDetails/${id}`);
        handleSingleMeal(id);
    }

    return (
        <div onClick={mealDetailsHandler} className='col-12 col-md-4 text-center meal-item'>
            <img src={img} className='w-50' alt="" />
            <div className='mt-3'>
                <h4>{mealName}</h4>
                <p>{mealText}</p>
                <p className='fw-bold'>{price}</p>
            </div>
        </div>
    );
};

export default BreakfastMeal;