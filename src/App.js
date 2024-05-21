import './App.css'
import Header from './components/header/header'
import { ThemeProvider } from './themeContext/ThemeContext';
import Home from './components/home_slider/home'
import Service from './components/service/service'
import Featured from './components/products/featured'
import Footer from './components/footer/footer'
import Testimonial from './components/testimonial/testimonials'

function App() {
  return (
    <ThemeProvider>
      <div>
        <>
          < Header />
        
          < Home />

          < Service />

          < Featured />

          < Testimonial />

          < Footer />
        </>
      </div>
    </ThemeProvider>
  );
}
export default App;