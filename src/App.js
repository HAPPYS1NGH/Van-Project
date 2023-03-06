import {BrowserRouter , Routes , Route } from "react-router-dom"
import Home from './pages/Home'
import About  from "./pages/About";
import Vans from './pages/Vans'
import VanDetail from "./pages/VanDetail";
import Layout from './components/Layout'
import './App.css';
import "./server"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='vans' element={<Vans/>} />
        <Route path="vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}


