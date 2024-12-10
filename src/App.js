import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Labs from "./components/Lab";
import NotFound from "./components/NotFound";
import Support from "./components/Support";
import {Link} from "react-router-dom";
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/about"></Link>About</li>
          <li><Link to="/labs">Labs</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
        <Route index element={<Home/>}></Route>{/**Default route */}
        <Route path="/support" element={<Support/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/labs" element={<Labs/>}></Route>
        <Route path="*" element={<NotFound/>}></Route></Route>
      </Routes>
    </div>
  );
}

export default App;
