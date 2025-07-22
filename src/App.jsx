import { BrowserRouter, Routes, Route } from "react-router"
import { UserProvider } from "./context/UserContext"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from "./pages/user/Home"
import Login from "./pages/user/Login"
import Register from "./pages/user/Register"
import Reservations from "./pages/user/Reservations";
import ProtectedRouteUser from "./auth/ProtectedRouteUser"
import Payment from "./pages/user/Payment"
import Availability from "./pages/user/Availability"
import OAuth2RedirectHandler from "./auth/Oauth"
import ProtectedRouteVisitor from "./auth/ProtectedRouteVisitor"
import Hotels from "./pages/admin/Hotels"
import BookingSuccess from "./pages/user/BookingSuccess"
import ServiceSurvey from "./pages/user/ServiceSurvey"
import ProtectedAdmin from "./auth/ProtectedAdmin"
import Hotel from "./pages/admin/Hotel"
import HotelInfo from "./pages/user/HotelInfo"
import AdminDashboard from "./pages/admin/AdminDashboard"
import CreateRoom from "./pages/admin/CreateRoom"
import Plans from "./pages/user/Plans"

function App() {

  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
    
      <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/infohotel" element={<HotelInfo/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/oauth2-redirect" element={<OAuth2RedirectHandler/>}/>
          <Route path="/survey" element={<ServiceSurvey/>}></Route>
          <Route path="/plans" element={<Plans/>}/>
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
            <Route path="/admin" element={<AdminDashboard/>}/>
            <Route path="/hotel" element={<Hotels/>}/>
            <Route path="/hotel/rooms/:id" element={<Hotel/>}/>
            <Route path="/hotel/room/create" element={<CreateRoom/>}/>
          </Route>
        </Routes>
      </QueryClientProvider>
      </UserProvider>
      
    </BrowserRouter>
  )
}

export default App
