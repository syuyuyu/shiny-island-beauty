// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './pages/About';
import Item from './pages/Item';
import Product from './pages/Product';
import Reserve from './pages/Reserve';
import Location from './pages/Location';

const App = () => {
  return (
    <BrowserRouter basename="/shiny-island-beauty">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="about" replace />} />
          <Route path="about" element={<About />} />
          <Route path="item" element={<Item />} />
          <Route path="product" element={<Product />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="location" element={<Location />} />
        </Route>
          {/* fallback 處理 */}
        <Route path="*" element={<Navigate to="about" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
