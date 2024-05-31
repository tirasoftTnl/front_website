import AboutPage from './Pages/About/AboutPage';
import ProductsPage from './Pages/Products/productsPage';
import ServicesPage from './Pages/services/servicesPage';
import Home from './Pages/Home'
import Contact from './Pages/contact/contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={ < Home />} />
          <Route path="/contact" element={ < Contact />} />
          <Route path="/product" element={ < ProductsPage />} />
          <Route path="/about" element={ < AboutPage />} />
          <Route path="/services" element={ < ServicesPage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}
export default App;