import React, { useContext, useState } from 'react';
import { DinnerMealContext } from '../../Context/MealProviders';

const MealDetails = () => {
    const { singleMeal } = useContext(DinnerMealContext);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(55);

    // console.log(singleMeal);
    console.log(quantity);
    // price calculator
    const priceHandler = () => setPrice(quantity * 55);

    // Quantity handler
    const qtyHandler = add => {
        add ? setQuantity(quantity + 1) : quantity > 1 && setQuantity(quantity - 1)
        priceHandler()
        // if (add) {
        //     setQuantity(quantity + 1);
        //     console.log(quantity);
        //     priceHandler()
        // }
        // else {
        //     quantity > 1 && setQuantity(quantity - 1);
        //     priceHandler()
        // }
    }

    return (
        <div className='d-flex'>
            <div>
                <h3>{singleMeal?.mealName}</h3>
                <p>{singleMeal?.description}</p>
                <div className='border rounded-pill shadow-sm p-3 mb-5 bg-body-tertiary rounded d-inline'>
                    <span className='fw-bold fs-4 mx-3'>${price}</span>
                    <input type="button" className='border-0 fs-3' onClick={() => qtyHandler(false)} name="" value="-" />
                    <span className='mx-3 fs-5'>{quantity}</span>
                    <input className='border-0 fs-3' type="button" onClick={() => qtyHandler(true)} name="" value="+" />
                </div>
            </div>
            <div>
                <img className='w-50' src={singleMeal?.imgUrl} alt="" />
            </div>
        </div>
    );
};

export default MealDetails;