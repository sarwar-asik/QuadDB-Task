import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
