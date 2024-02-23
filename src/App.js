
import './App.css';
import Api from './Api';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Api/>
    <Navbar/>
    </>
  );
}

export default App;
