import {Routes,Route} from 'react-router-dom'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home.jsx";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import "./index.css";

function App() {
  return (
<div >
<Navbar />
    <Routes>
      
        <Route  path="/" element = {<Home />}/>
        <Route  path="/detail/:id" element = {<Detail/>}/>
        <Route  path="/contact" element = {<Contact/>}/>
        <Route  path="/favs" element = {<Favs/>}/>
      
    </Routes>
    <Footer />
    </div>);
}

export default App;
