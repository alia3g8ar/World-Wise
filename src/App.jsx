import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./pages/Product/Product.jsx"
import Pricing from "./pages/Pricing/Pricing.jsx"
import HomePage from "./pages/HomePage/HomePage.jsx"
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx"
import AppLayout from "./pages/AppLayout/AppLayout.jsx"
import Login from "./pages/Login/Login.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
