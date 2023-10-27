import React, { useContext } from 'react';
import { DinnerMealContext } from '../Context/MealProviders';
import CartItem from './CartItem';

const FoodCart = () => {
    const { cart } = useContext(DinnerMealContext);

    return (
        <div className='container'>
            <h2 className='text-center my-4'>Food Cart</h2>
            {
                cart.map(item => <CartItem
                    key={item.id}
                    item={item}
                ></CartItem>)
            }
            <div className='text-center'>
                <button style={{ "backgroundColor": "crimson" }} className='btn btn-primary fw-semibold border-0 w-50'>Confirm Order</button>
            </div>
        </div>
    );
};

export default FoodCart;