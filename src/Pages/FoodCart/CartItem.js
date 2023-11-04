import React from 'react';

const CartItem = ({ item }) => {
    const {img, mealName} = item;
    return (
        <div className='d-flex'>
            <div className='row'><img className='col-4 col-md-2' src={img} alt="" /></div>
            <div><p className='fs-5 fw-semibold'>{mealName}</p></div>
        </div>
    );
};

export default CartItem;