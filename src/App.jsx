import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Course from './components/Course';
import Services from './components/Services';
import Footer from './components/Footer';
import ScrollToTop from './components/Scrolltotop';
import About from './components/About';
import Achievement from './components/Achievenent';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
         <Route path="/"       element={<Home />} />
         <Route path="/services" element={<Services />} />
         <Route path="/courses" element={<Course />} />
         <Route path="/about" element={<About />} />
         <Route path="/achievement" element={<Achievement />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;