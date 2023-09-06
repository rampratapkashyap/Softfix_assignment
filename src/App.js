import Pages from 'components/Blog';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Home from 'components/Home';
import Blog from 'components/Pages';
import ScrollToTop from 'components/ScrollToTop';
import About from 'components/About';
import Video from 'components/Video';
import { motion } from 'framer-motion';
import React from 'react';

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Home />
      <About />
      <Pages />
      <Blog/>
      <Video />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  )
}

export default App