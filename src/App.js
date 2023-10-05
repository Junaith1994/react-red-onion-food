import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Breakfast from './Pages/Menu/Breakfast/Breakfast';
import Lunch from './Pages/Menu/Lunch/Lunch';
import Dinner from './Pages/Menu/Dinner/Dinner';
import Menu from './Pages/Menu/Menu';

function App() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <Routes>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
      </Routes>
    </div>
  );
}

export default App;
