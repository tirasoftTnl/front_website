import '../App.css'
import Header from '../components/header/header'
import { ThemeProvider } from '../themeContext/ThemeContext';
import Intro from '../components/home_slider/Intro'
import Service from '../components/service/service'
import Footer from '../components/footer/footer'
import Testimonial from '../components/testimonial/testimonials'
import Solutions from '../components/solutions/Solutions';
import Zigzag from '../components/ZigZags/zigzag';
function Home() {
  return (
    <ThemeProvider>
      <div>
        <>
          < Header />

          < Intro />
          
          < Testimonial />
          
          < Zigzag />

          < Service />
          
          < Solutions />          

          < Footer />
        </>
      </div>
    </ThemeProvider>
  );
}
export default Home;