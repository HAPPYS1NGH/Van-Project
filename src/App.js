import {BrowserRouter , Routes , Route , Link} from "react-router-dom"
import Home from './components/Home'
import About  from "./components/About";
import Vans from './components/Vans'
import VanDetail from "./components/VanDetail";
import './App.css';
import "./server"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Link to="/" className="logo">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/vans' element={<Vans/>} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}


