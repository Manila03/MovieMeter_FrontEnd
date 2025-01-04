import { Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
