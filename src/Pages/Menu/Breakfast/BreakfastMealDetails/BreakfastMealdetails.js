import React, { useContext } from 'react';
import { BreakfastMealContext } from '../../../Context/BreakfastProviders';
import { DinnerMealContext } from '../../../Context/MealProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const BreakfastMealdetails = () => {
    // Breakfast meal data
    const { singleMeal } = useContext(BreakfastMealContext);

    // Necessary functions and states from MealProviders
    const { quantity, price, qtyHandler, handleFoodCart, message } = useContext(DinnerMealContext);

    console.log(singleMeal);
    return (
        <div className='d-flex flex-md-row flex-column-reverse container my-4'>
            <div>
                <h3>{singleMeal?.mealName}</h3>
                <p>{singleMeal?.description}</p>
                <div className='border rounded-pill shadow-sm p-3 mb-5 bg-body-tertiary rounded d-inline'>
                    <span className='fw-bold fs-4 mx-3'>${price}</span>
                    <input type="button" className='border-0 fs-3' onClick={() => qtyHandler(false)} name="" value="-" />
                    <span className='mx-3 fs-5'>{quantity}</span>
                    <input className='border-0 fs-3' type="button" onClick={() => qtyHandler(true)} name="" value="+" />
                </div>
                <div className='my-4'>
                    <button onClick={() => handleFoodCart(singleMeal)} style={{ "backgroundColor": "crimson" }} className='btn text-white px-4 py-2 rounded-pill'>
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        <span className='ms-3'>Add</span>
                    </button>
                    <p className='text-success fw-semibold'>{message}</p>
                </div>
            </div>
            <div className='row'>
                <img className='col-12' src={singleMeal?.imgUrl} alt="" />
            </div>
        </div>
    );
};

export default BreakfastMealdetails;