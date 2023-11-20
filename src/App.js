import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import BlueLight from './bluelight/bluelight.jsx'
import EyeCare from './eyecare/eyecare.jsx'


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<BlueLight/>}/>
        <Route path='/eyecare' element={<EyeCare/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
