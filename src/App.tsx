import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Documentation from './pages/Documentation';
import Examples from './pages/Examples';
import ApiReference from './pages/ApiReference';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/api" element={<ApiReference />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
