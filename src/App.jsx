import { Route, Routes } from 'react-router-dom';
import styles from "./App.module.css";
import Nav from './components/Nav/Nav';
import Admin from './views/Admin/Admin';
import Home from './views/Home/Home';
import Register from './views/Register/Register';
import Rooms from './views/Rooms/Rooms';
import Reservations from './views/Reservations/Reservations';
import Footer from './components/Footer/Footer';
import WhoAreWe from './views/WhoAreWe/WhoAreWe';

function App() {

  return (
    <div className={styles.App}>
    <Nav></Nav>
      <div className={styles.Content}>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/registrarse" element={<Register/>}></Route>
          <Route path="/inicio" element={<Home/>}></Route>
          <Route path="/QuienesSomos" element={<WhoAreWe/>}></Route>
          <Route path="/reservaciones" element={<Reservations/>}></Route>
          <Route path="/habitaciones" element={<Rooms/>}></Route>
          {/* <Route path="/myTurns" element={<MyTurns/>}></Route> */}
          <Route path="/admin" element={<Admin/>}></Route>
        {/*  <Route path="*" element={<Error/>}></Route> */}
        </Routes>

      </div>
      
    <Footer></Footer>
    </div>
    
  )
}

export default App
