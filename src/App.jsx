import { useState, useEffect } from 'react';

import LoadingScreen from './components/LoadingScreen';
import ProgressBar from './components/ProgressBar';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import Feedback from './components/Feedback';
import Blog from './components/Blog';
import Screenshots from './components/Screenshots';
import Features from './components/Features';
import AIShowcase from './components/AIShowcase';
import TechStack from './components/TechStack';
import Newsletter from './components/Newsletter';
import About from './components/About';
import Footer from './components/Footer';
import Popup from './components/Popup';
import ChatWidget from './components/ChatWidget';
import CursorTrail from './components/CursorTrail';
import BackToTop from './components/BackToTop';

import './App.css';

export default function App() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });



  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  // Scroll reveal for sections
  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.85;
      document.querySelectorAll('.section').forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) section.classList.add('visible');
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsLight((prev) => !prev);

  return (
    <>
      <LoadingScreen />
      <Particles isLight={isLight} />
      <ProgressBar />
      <Navbar isLight={isLight} onThemeToggle={toggleTheme} />
      <Hero />
      <Stats />
      <Demo />
      <Testimonials />
      <Feedback />
      <Blog />
      <Screenshots />
      <Features />
      <AIShowcase />
      <TechStack />
      <Newsletter />
      <About />
      <Footer />
      <Popup />
      <ChatWidget />
      <CursorTrail />
      <BackToTop />
    </>
  );
}