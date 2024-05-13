
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Notfound from './Notfound';
import Header from './Header';
import Adver from './Adver';
import Card from './Card';
import Adver2 from './Adver2';
import Menuop from './Menuop';
import Menuitem from './Menuitem';
import Form from './Form';
import Team from './Team';
import Footer from './Footer';
import "./Style.css";
function App() {
  return (
 <>
<Header></Header> 
<Adver w1="Enjoy Meal" w2="Delicious Meal" w3="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        w4="Voluptatem beatae a id amet facere sapiente assumenda,
         provident necessitatibus deleniti quibusdam" w5="BOOK A TABLE" ></Adver>
<Card/>
<Adver2></Adver2>
<Menuop></Menuop>
<Menuitem></Menuitem>
<Form></Form>
<Team></Team>
<Footer></Footer> 
 <Routes>
  <Route path='/' element={<Header/>}></Route>
  <Route path="/Home" element={<Home/>}></Route>
  <Route path="/About" element={<About/>}></Route>
  <Route path="/Services" element={<Services/>}></Route>
  <Route path="Contact" element={<Contact/>}></Route>
  <Route path='*' element={<Notfound/>}></Route> 
 </Routes>

  </>
  );
}

export default App;
