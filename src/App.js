import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Profile } from './components/Profile';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Profile />
      <Contact />
      <Footer />
      <motion.div
      initial={{ x:-20, opacity:.5 }}
      animate={{ x:0, opacity:1 }}
      transition={{ delay: 2, duration: 2 }}
      >
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
      <a href="https://wa.me/2348142254482?text=Hi%20I'm......%0AI%20want%20to%20use%20your%20service%20" className="float" target="_blank">
      <i className="fa fa-whatsapp my-float"></i>
      </a>
      </motion.div>
    </div>
  );
}

export default App;
