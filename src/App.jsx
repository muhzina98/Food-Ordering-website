import ProtectedLayout from './layouts/ProtectedLayout'
import PublicLayout from './layouts/PublicLayout'
import './App.css'
import HomePage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'

import LoginPage from './Pages/LoginPage'
import DishesPage from './Pages/DishesPage'
import SignupPage from './Pages/SignUpPage'

import ProductDetails from './Pages/ProductDetails'

import UserDashboard from './Pages/UserDashboard'
import { CartPage } from './Pages/CartPage'

import ContactPage from './Pages/ContactPage'
import OrderPage from './Pages/OrderPage'
import OrderSummary from './Pages/OrderSummary'
import ManageUser from './Pages/ManageUser'
import ManageDishes from './Pages/Managedishes'

import AboutPage from './Pages/AboutPage'
import { AdminDashBoard } from './Pages/AdminDashBoard'






function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="/menu" element={<DishesPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='productDetails/:id' element={<ProductDetails />} />
          <Route path="admin-dashboard" element={<AdminDashBoard />}>
            <Route path="users" element={<ManageUser />} />
            <Route path="dishes" element={<ManageDishes />} />
            {/* <Route path="orders" element={<ManageOrders />} /> */}
          </Route>


        </Route>

        <Route path="/user-dashboard" element={<ProtectedLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="cart" element={<CartPage />} />
          <Route path='menu' element={<DishesPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="order-summary" element={<OrderSummary />} />
        </Route>



      </Routes>


    </>

  )
}

export default App
