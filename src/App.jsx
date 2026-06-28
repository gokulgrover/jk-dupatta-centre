import { BrowserRouter, Routes, Route } from "react-router-dom";
import ColorProducts from "./pages/ColorProducts";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CategoryProducts from "./pages/CategoryProducts";
import SubCategoryProducts from "./pages/SubCategoryProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        

        <Route path="/" element={<Home />} />

        <Route
          path="/category/:slug"
          element={<CategoryProducts />}
        />

        <Route
          path="/sub-category/:slug"
          element={<SubCategoryProducts />}
        />

        <Route
  path="/color/:slug"
  element={<ColorProducts />}
 />
<Route
  path="/admin"
  element={<AdminLogin />}
/>

<Route
  path="/admin/dashboard"
  element={<AdminDashboard />}
/>
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;