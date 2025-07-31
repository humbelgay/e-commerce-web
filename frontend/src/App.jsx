import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Homepage'
import Login from './pages/Loginpage'
import SignUpPage from './pages/signuppage'
import { useEffect } from 'react'
import NavBar from './components/navbar'
import CartPage from './pages/cartsPage'




import CategoryPage from './pages/categoryPage'
import './index.css' 
import { Toaster } from 'react-hot-toast'
import { useUserStore } from './stores/useUserStore'
import LoginPage from './pages/Loginpage'
import LoadingSpinner from './components/loadingSpinner'
import PurchaseSuccessPage from './pages/PurchaseSuccessPage'
import PurchaseCancelPage from './pages/PurchaseCancelPage'
import AdminPage from './pages/AdminPage'
// import CartPage from './pages/cartPage'
import { useCartStore } from './stores/useCartStore'


function App() {
  const {user ,checkAuth, checkingAuth} = useUserStore();
  const {getCartItems} = useCartStore();

  useEffect(()=>{
    checkAuth();
     } ,[checkAuth]);

     useEffect(() => {
      if (!user) return;

        getCartItems();
        
	}, [getCartItems,user]);

     if(checkingAuth) return <LoadingSpinner/>
  
  return (
   <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
  {/* Background gradient overlay */}
  <div className="absolute inset-0">
    
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.4)_0%,rgba(180,83,9,0.2)_45%,rgba(0,0,0,0.1)_100%)] pointer-events-none" />

    {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.4)_0%,rgba(185,28,28,0.2)_45%,rgba(0,0,0,0.1)_100%)] pointer-events-none" /> */}

    {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.4)_0%,rgba(88,28,135,0.2)_45%,rgba(0,0,0,0.1)_100%)] pointer-events-none" /> */}
    
    {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.4)_0%,rgba(30,64,175,0.2)_45%,rgba(0,0,0,0.1)_100%)] pointer-events-none" /> */}
    
    
    {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.4)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)] pointer-events-none" /> */}
  </div>

  {/* Content Layer */}
  <div className="relative z-50 pt-40">
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={!user ?  <LoginPage/> : < Navigate to='/' />} />
      <Route path="/signup" element={!user ?  <SignUpPage/> : < Navigate to='/' />}/>
      {/* <Route path="/secret-dashboard" element={user?.role === "admin" ?  <AdminPage />: < Navigate to='/login' />}/> */}
      <Route
						path='/secret-dashboard'
						element={user?.role === "admin" ? <AdminPage /> : <Navigate to='/login' />}
					/>
          <Route
						path='/category/:category'
						element={user?.role === "admin" ? <CategoryPage /> : <Navigate to='/login' />}
					/>
          <Route path='/cart' element={user ? <CartPage /> : <Navigate to='/login' />} />
          <Route path='/purchase-success' element={user ? <PurchaseSuccessPage /> : <Navigate to='/login' />} />
          <Route path='/purchase-cancel' element={user ? <PurchaseCancelPage /> : <Navigate to='/login' />} />
    </Routes>
  </div>
  <Toaster/>
  </div>
  )
}


export default App
