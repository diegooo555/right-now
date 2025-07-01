import { BrowserRouter, Routes, Route } from "react-router"
import { UserProvider } from "./context/UserContext"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Reservations from "./pages/Reservations";
import ProtectedRouteUser from "./auth/ProtectedRouteUser"
import Payment from "./pages/Payment"
import Availability from "./pages/Availability"
import OAuth2RedirectHandler from "./auth/Oauth"
import ProtectedRouteVisitor from "./auth/ProtectedRouteVisitor"
import Hotel from "./pages/Hotel"
import BookingSuccess from "./pages/BookingSuccess"
import ServiceSurvey from "./pages/ServiceSurvey"
import ProtectedAdmin from "./auth/ProtectedAdmin";

function App() {

  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
    
      <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/oauth2-redirect" element={<OAuth2RedirectHandler/>}/>
          <Route path="/survey" element={<ServiceSurvey/>}></Route>
          <Route element={<ProtectedRouteVisitor/>}>
            <Route path="/register" element={<Register/>}/>
          </Route>
          <Route element={<ProtectedRouteUser/>}>
            <Route path="/reservations" element={<Reservations/>}/>
            <Route path="/availability" element={<Availability/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/booking" element={<BookingSuccess/>}/>
          </Route>
          <Route element={<ProtectedAdmin/>}>
            <Route path="/hotel" element={<Hotel/>}/>
          </Route>
        </Routes>
      </QueryClientProvider>
      </UserProvider>
      
    </BrowserRouter>
  )
}

export default App
