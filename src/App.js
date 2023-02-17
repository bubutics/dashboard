import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Orders from './pages/Orders/orders';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route exact to path='/' element={<Home />} />
    <Route exact to path='/Orders' element={<Orders/>}/>

   
    
  </Routes>
</BrowserRouter>

  );
}

export default App;
