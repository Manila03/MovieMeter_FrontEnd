import { Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage'
import './App.css'
import Prueba2 from "./views/Prueba2";
import Login_SignIn from "./views/Login_SignIn"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Login_SignIn' element={<Login_SignIn />} />
        <Route path='/Prueba2' element={<Prueba2 />} />
      </Routes>
    </>
  )
}

export default App
