import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './sections/home';
import Galery from './sections/Galery';
import Skills from './sections/Skills';
import InnovativeEnvironment from './sections/InnovativeEnvironment';
import OurCourses from './sections/OurCourses';
import Oponions from './sections/Opinions';
import Registration from './sections/Registration';
import Footer from './sections/Footer';

function App() {
  return (
    <>
    <Home />
    <Galery />
    <Skills />
    <InnovativeEnvironment />
    <OurCourses />
    <Oponions />
    <Registration />
    <Footer />
    </>
  );
}

export default App;
