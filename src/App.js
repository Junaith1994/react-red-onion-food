import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Breakfast from './Pages/Menu/Breakfast/Breakfast';
import Lunch from './Pages/Menu/Lunch/Lunch';
import Dinner from './Pages/Menu/Dinner/Dinner';
import Menu from './Pages/Menu/Menu';
import MealDetails from './Pages/Menu/MealDetails/MealDetails';
import LunchMealDetails from './Pages/Menu/Lunch/LunchMealDetails/LunchMealDetails';
import FoodCart from './Pages/FoodCart/FoodCart';
import BreakfastMealdetails from './Pages/Menu/Breakfast/BreakfastMealDetails/BreakfastMealdetails';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <SignUp></SignUp> */}
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Breakfast></Breakfast>}></Route>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        <Route path='/mealdetails/:mealId' element={<MealDetails></MealDetails>}></Route>
        <Route path='/lunchMealDetails/:mealId' element={<LunchMealDetails></LunchMealDetails>}></Route>
        <Route path='/breakfastMealDetails/:mealId' element={<BreakfastMealdetails></BreakfastMealdetails>}></Route>
        <Route path='/foodcart' element={<FoodCart></FoodCart>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
