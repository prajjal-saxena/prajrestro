import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartItem from './CartItem';
import Menubar from './components/Menu';
import Home from './Home';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
         <Menubar/>
         <Routes>
             <Route path='/' element= {<Home/>}/>
             <Route path='/cart' element= {<CartItem/>}/>

             <Route path='/login' element={<Login/>} /> 
             <Route path='/sign-up' element={<Signup/>} />
          </Routes>    
      </Router>
    </div>
  );
}



export default App;
