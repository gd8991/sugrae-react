import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import FounderSection from './components/FounderSection';
import CollectionSection from './components/CollectionSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      <CustomCursor />
      
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
      
      <Header />
      <Hero />
      <FounderSection />
      <CollectionSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default App;
