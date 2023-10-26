import React, { useContext, useEffect, useState } from 'react';
import { DinnerMealContext } from '../../Context/MealProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const MealDetails = () => {
    const { singleMeal, handleFoodCart } = useContext(DinnerMealContext);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(55);

    // console.log(singleMeal);
    // console.log(quantity);
    // price calculator
    const priceHandler = () => setPrice(prevPrice => quantity * 55);

    // Quantity handler
    const qtyHandler = add => {
        add ? setQuantity(prevQuantity => quantity + 1) : quantity > 1 && setQuantity(prevQuantity => prevQuantity - 1)
    }

    useEffect(() => {
        priceHandler();
    }, [quantity]);

    return (
        <div className='d-flex container'>
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
                    <button onClick={() => handleFoodCart(singleMeal)} style={{"backgroundColor": "crimson"}} className='btn text-white px-4 py-2 rounded-pill'>
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        <span className='ms-3'>Add</span>
                    </button>
                </div>
            </div>
            <div>
                <img className='w-50' src={singleMeal?.imgUrl} alt="" />
            </div>
        </div>
    );
};

export default MealDetails;