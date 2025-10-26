import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Singup'
import { Signin } from './pages/Signin'
import { Blogs } from './pages/Blogs'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/blog/:id' element={<Blogs/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
