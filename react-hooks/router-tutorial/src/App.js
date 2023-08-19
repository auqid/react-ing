import { AuthProvider } from "./components/Auth";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";

import Navbar from "./components/Navbar";
import "./index.css";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import NewProducts from "./components/NewProducts";
import FeaturedProducts from "./components/FeaturedProducts";
import Users from "./components/Users";
import Userdetails from "./components/Userdetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="loading">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />

          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="New" element={<NewProducts />} />
            <Route path="Featured" element={<FeaturedProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<Userdetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
