import AboutPage from './Pages/About/AboutPage';
import ProductsPage from './Pages/Products/productsPage';
import ServicesPage from './Pages/services/servicesPage';
import Home from './Pages/Home';
import Contact from './Pages/contact/contact';
import CloudPage from './Pages/Products/Cloud/CloudPage';
import OnPromisePage from './Pages/Products/OnPromise/OnPromisePage';
import TelephonesPage from './Pages/Products/Telephones/telephonesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
          <Route path="/telephones_Page" element={ < TelephonesPage />} />
          <Route path="/cloud_Page" element={ < CloudPage />} />
          <Route path="/OnPromise_Page" element={ < OnPromisePage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}
export default App;