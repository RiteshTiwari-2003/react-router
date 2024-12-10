import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Labs from "./components/Lab";
import NotFound from "./components/NotFound";
import Support from "./components/Support";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/support" element={<Support/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/labs" element={<Labs/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
