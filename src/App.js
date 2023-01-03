import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./sharedpage/Header/Header";
import Screen2 from "./components/screen2/Screen2";

function App() {
  return (
    <div className="" style={{"maxWidth":'90%',"margin":'auto'}}>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:score' element={<Screen2/>}/>
     </Routes>
    </div>
  );
}

export default App;
