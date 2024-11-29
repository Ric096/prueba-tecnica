import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, ProductPage } from "./components";

export const AppRouter = () => {
  return (
    <BrowserRouter>

    <section className="flex flex-col h-screen align-center justify-center">
        <Routes>
          <Route path="/" element={<Navigate to='/home' />} />
          <Route path="/home" element={< Dashboard />} />
          <Route path="/home/products/:id" element={< ProductPage />} />
        </Routes>
    </section>

    </BrowserRouter>
    
  )
}