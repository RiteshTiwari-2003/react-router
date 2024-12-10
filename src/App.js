import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Lab from "./components/Lab";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/support" element={<div>Support Page</div>}></Route>
        <Route path="/about" element={<div>About Page</div>}></Route>
        <Route path="/labs" element={<div>labs Page</div>}></Route>
        <Route path="*" element={<div>Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
