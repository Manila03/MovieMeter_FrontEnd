import { Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage'
import './App.css'
import Login_SignIn from "./views/Login_SignIn"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Login_SignIn' element={<Login_SignIn />} />
      </Routes>
    </>
  )
}

export default App
