import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { UserProvider } from "./context/UserContext"
import Reserve from "./pages/Reserve"
import Register from "./pages/Register"
import Reservations from "./pages/Reservations"
import ProtectedRouteUser from "./auth/ProtectedRouteUser"
import Payment from "./pages/Payment"
import Availability from "./pages/Availability"
import OAuth2RedirectHandler from "./pages/Oauth"
import ProtectedRouteVisitor from "./auth/ProtectedRouteVisitor"
import Hotel from "./pages/Hotel"
import BookingSuccess from "./pages/BookingSuccess"
import ServiceSurvey from "./pages/ServiceSurvey"

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/oauth2-redirect" element={<OAuth2RedirectHandler/>}/>
          <Route path="/survey" element={<ServiceSurvey/>}></Route>
          <Route element={<ProtectedRouteVisitor/>}>
            <Route path="/register" element={<Register/>}/>
          </Route>
          <Route element={<ProtectedRouteUser/>}>
            <Route path="/hotel" element={<Hotel/>}/>
            <Route path="/reserve" element={<Reserve/>}/>
            <Route path="/reservations" element={<Reservations/>}/>
            <Route path="/availability" element={<Availability/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/booking" element={<BookingSuccess/>}/>
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
