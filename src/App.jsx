import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { UserProvider } from "./context/UserContext"
import Reserve from "./pages/Reserve"
import Register from "./pages/Register"
import Reservations from "./pages/Reservations"

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/reserve" element={<Reserve/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/reservations" element={<Reservations/>}/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
