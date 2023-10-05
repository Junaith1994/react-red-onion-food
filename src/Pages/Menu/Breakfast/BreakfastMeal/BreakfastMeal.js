import React from 'react';
// import { Card, CardGroup, Col, Row } from 'react-bootstrap';

const BreakfastMeal = ({ meal }) => {
    const { img, mealName, mealText, price } = meal;

    return (
        <div className='col-4 text-center'>
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