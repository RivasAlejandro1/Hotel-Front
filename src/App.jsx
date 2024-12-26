import { Route, Routes } from 'react-router-dom';
import styles from "./App.module.css";
import Nav from './components/Nav/Nav';/* 
import Home from './views/Home/Home'; */

function App() {

  return (
    <div className={styles.App}>
    <Nav></Nav>{/* 
    <Home></Home> */}
      {/* <Routes>
         <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/myTurns" element={<MyTurns/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes> */}
    </div>
    
  )
}

export default App
