import '../App.css'
import Header from '../components/header/header'
import { ThemeProvider } from '../themeContext/ThemeContext';
import Intro from '../components/home_slider/Intro'
import Service from '../components/service/service'
import Featured from '../components/products/featured'
import Footer from '../components/footer/footer'
import Testimonial from '../components/testimonial/testimonials'

function Home() {
  return (
    <ThemeProvider>
      <div>
        <>
          < Header />

          < Intro />

          < Service />

          < Featured />

          < Testimonial />

          < Footer />
        </>
      </div>
    </ThemeProvider>
  );
}
export default Home;