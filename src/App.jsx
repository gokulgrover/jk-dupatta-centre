import { BrowserRouter, Routes, Route } from "react-router-dom";
import ColorProducts from "./pages/ColorProducts";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CategoryProducts from "./pages/CategoryProducts";

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
  path="/color/:slug"
  element={<ColorProducts />}
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