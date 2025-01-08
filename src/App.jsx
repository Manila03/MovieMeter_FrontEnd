import { Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage'
import './App.css'
import Login_SignUp from "./views/Login_SignUp"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Login_Signup' element={<Login_SignUp />} />
      </Routes>
    </>
  )
}

export default App
