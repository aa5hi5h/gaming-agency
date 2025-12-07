import React from 'react';
import  Navigation  from './components/navigation';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Services } from './components/services';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Stats } from './components/stats';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gaming-black text-white selection:bg-gaming-accent selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;