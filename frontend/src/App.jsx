import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TimeLine from './components/TimeLine';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-slate-950 min-h-screen font-sans">
      {isLoading ? (
        <LoadingScreen onFinished={() => setIsLoading(false)} />
      ) : (
        <main className="animate-fade-in">
          <Hero />
          <About />
          <TimeLine />
          <Projects />
          <Contact />
        </main>
      )}
    </div>
  );
}