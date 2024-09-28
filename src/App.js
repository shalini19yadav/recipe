import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './component/Navbar';
import SingleRecipe from './pages/SingleRecipe';

function App() {

  
  return (
    <div className="App">
      
    <BrowserRouter>
    <div style={{marginBottom:'70px'}}><Navbar/></div>
    
      <Routes>
        
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/single' element={<SingleRecipe/>} />

      </Routes>
    
    
    </BrowserRouter>

    </div>
  );
}

export default App;
