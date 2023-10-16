import React, { useContext, useEffect, useState } from 'react';
import DinnerMeal from './DinnerMeal/DinnerMeal';
import { DinnerMealContext } from '../../Context/MealProviders';

// export const MealDetailsContext = createContext(null);

const Dinner = () => {
    const { meals, handleSingleMeal } = useContext(DinnerMealContext);
    // const [meals, setMeals] = useState([]);
    
    // const { meals, handleSingleMeal } = useProductDetail();

    // const [singleMeal, setSingleMeal] = useState({});
    // // console.log(singleMeal);

    // useEffect(() => {
    //     fetch('dinnerMealData.json')
    //         .then(res => res.json())
    //         .then(data => setMeals(data))
    // }, [])

    // const handleSingleMeal = id => {
    //     const singleMealInfo = meals.find(meal => meal.id === id);
    //     console.log(singleMealInfo);
    //     setSingleMeal(singleMealInfo);
    // }

    return (
        <div className='container mt-5'>
            <div className='row g-3'>
                {
                    meals.map(meal => <DinnerMeal
                        key={meal.id}
                        meal={meal}
                        singleMeal={handleSingleMeal}
                    ></DinnerMeal>)
                }
            </div>
        </div>
    );
};

export default Dinner;