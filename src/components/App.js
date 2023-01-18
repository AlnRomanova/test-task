import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";
import { fetchProducts } from "./redux/products.Operation";
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ProductPage = lazy(() => import("../pages/ProductPage/ProductPage"));

export const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
