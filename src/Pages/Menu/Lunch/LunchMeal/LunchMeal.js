import React from 'react';
import { useNavigate } from 'react-router-dom';

const LunchMeal = ({ meal }) => {
    const { id, img, mealName, mealText, price } = meal;
    const navigate = useNavigate();

    const lunchMealDetails = () => {
        navigate(`/lunchMealDetails/${id}`);
    }

    return (
        <div onClick={lunchMealDetails} className='col-12 col-md-4 text-center meal-item'>
            <img src={img} className='w-50' alt="" />
            <div className='mt-3'>
                <h4>{mealName}</h4>
                <p>{mealText}</p>
                <p className='fw-bold'>{price}</p>
            </div>
        </div>
    );
};

export default LunchMeal;