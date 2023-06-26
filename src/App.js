import Navbar1 from './components/Navbar1';
import './App.css';

import Welcomepage from './Home/Welcomepage';
import Home from './Home/Home';
import Forms from'./Login/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import OnlineCource from './Home/OnlineCource';
import About1 from './About/About1';
import About2 from './About/About2';
import Cousce from './Cousce';
import Blog from './Blog';
import Contactus from './Contactus'

function App() {
  return (
    <>
  <Router>
 <Navbar1/>
 
  <Routes>
   <Route exact path="/Home" element={<Home/>} />
   <Route exact path="/onlinecource" element={<OnlineCource/>} />
   <Route exact path="/Forms" element={<Forms/>} />
    <Route exact path="/welcomepage" element={<Welcomepage/>} />
    <Route exact path="/About1" element={<About1/>} />
    <Route exact path="/About2" element={<About2/>} />
    <Route exact path="/Course" element={<Cousce/>} />
    <Route exact path="/Blog" element={<Blog/>} />
    <Route exact path="/Contactus" element={<Contactus/>} />
   </Routes>
 
  </Router>
    </>
  );
}

export default App;

