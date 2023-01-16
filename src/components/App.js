import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import HomePage from '../pages/HomePage/HomePage';
import ProductPage from '../pages/ProductPage/ProductPage';
  

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  );
};

