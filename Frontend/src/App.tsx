import './App.css'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Signup} from "./pages/Auth/Signup"
import { Signin } from './pages/Auth/Signin'
import { Share } from './pages/Share'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes >
    <Route path="/signup" element={<Signup/>} />
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path='/share/:id' element={<Share/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}

export default App
