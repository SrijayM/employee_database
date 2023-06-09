import logo from './logo.svg';
import './App.css';

import Home from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='background-full'>
    <BrowserRouter >
      <div className="container">
        <h3 className='m-3 d-flex justify-content-center text-white'>
            Employee Dashboard
        </h3>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/department" element={<Department/>} />
          <Route path="/employee" element={<Employee/>} />
        </Routes>
      </div>
    </BrowserRouter>

    </div>
  );
}

export default App;
