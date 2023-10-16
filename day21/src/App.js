import logo from './logo.svg';
import './App.css';
import Login from './Components/Assets/Loginform/Login';
import Signup from './Components/Assets/Loginform/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Assets/Loginform/Home';
import Sidebar from './Components/Assets/Loginform/Sidebar';
import Contacts from './Components/Assets/Loginform/Contacts';
import About from './Components/Assets/Loginform/About';
import Animal from './Components/Assets/Loginform/Animal';
import Feedback from './Components/Assets/Loginform/Feedback';
import Faq from './Components/Assets/Loginform/Faq';
import Place from './Components/Assets/Loginform/Place';
import Terms from './Components/Assets/Loginform/Terms';
import Video from './Components/Assets/Loginform/Video';
import Policy from './Components/Assets/Loginform/Policy';
import Gallery from './Components/Assets/Loginform/Gallery';
import Video2 from './Components/Assets/Loginform/Video2';
import SearchBar from './Components/Assets/Loginform/SearchBar';
import Pine from './Components/Assets/Loginform/Pine';
import Gavi from './Components/Assets/Loginform/Gavi';

function App() {
  return (
    <div className="App">



    <BrowserRouter>
    <Routes>
   
    <Route path='/home' element={<Home/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/side' element={<Sidebar/>}/>
    <Route path='/contact' element={<Contacts/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='animal' element={<Animal/>}/>
    <Route path='feedback' element={<Feedback/>}/>
    <Route path='faq' element={<Faq/>}/>
    <Route path='/place/place' element={<Place/>}/>
    <Route path='terms' element={<Terms/>}/>
    <Route path='video' element={<Video/>}/>
    <Route path='video2' element={<Video2/>}/>
    <Route path='policy' element={<Policy/>}/>
    <Route path='gallery' element={<Gallery/>}/>
    <Route path='searchbar' element={<SearchBar/>}/>
    <Route path='pine' element={<Pine/>}/>
    <Route path='gavi' element={<Gavi/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
