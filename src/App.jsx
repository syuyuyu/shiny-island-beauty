// src/App.jsx
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './pages/About';
import Item from './pages/Item';
import Reserve from './pages/Reserve';
import Location from './pages/Location';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="about" replace />} />
          <Route path="about" element={<About />} />
          <Route path="price" element={<Item />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="location" element={<Location />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </HashRouter>

  );
};

export default App;
