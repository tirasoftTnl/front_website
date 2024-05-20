import './App.css'
import Header from './components/header'
import Home from './components/home'
import { ThemeProvider } from './themeContext/ThemeContext';
import Service from './components/service'
import Featured from './components/featured'
import Footer from './components/footer'
import Testimonial from './components/testimonials'

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
