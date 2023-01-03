import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./sharedpage/Header/Header";
import Screen2 from "./components/screen2/Screen2";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="" style={{"maxWidth":'90%',"margin":'auto'}}>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:score' element={<Screen2/>}/>
     </Routes>
     <ToastContainer/>
    </div>
  );
}

export default App;
