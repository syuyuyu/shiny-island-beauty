// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Route path="about" element={<About />} />
          <Route path="item" element={<Item />} />
          <Route path="product" element={<Product />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
