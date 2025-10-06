import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Documentation from './pages/Documentation';
// import Examples from './pages/Examples';
import ApiReference from './pages/ApiReference';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contributing from './pages/Contributing';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/docs" element={<Documentation />} />
          {/* <Route path="/examples" element={<Examples />} /> */}
          <Route path="/api" element={<ApiReference />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contributing" element={<Contributing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
