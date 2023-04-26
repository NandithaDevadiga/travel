
import './App.css';
import { Route,Routes } from 'react-router-dom';

import Service from './rotes/Service1';
import Contact from './rotes/Contact';

import  About  from './rotes/About';

import Home from './rotes/home';
 export default function  App() {
  return (
    <div className='App'>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/service' element={<Service/>}/>
  <Route path='/contact' element={<Contact/>}/>

</Routes>

    </div>
  );
}

//export default App;
    //import Service from './rotes/service';

