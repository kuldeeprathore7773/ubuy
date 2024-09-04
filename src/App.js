import logo from './logo.svg';
import './App.css';
import Header from './sections/header/Header';
import Hero from './sections/hero/Hero';
import WhatWeDo from './sections/what-we-do/WhatWeDo';
import LatestNews from './sections/latest-news/LatestNews';
import WhatWeBelieve from './sections/what-we-believe/WhatWeBelieve';



function App() {
  return (
    <div className="App">
      
     <Header />

     <Hero />
     
      <WhatWeDo />

      <LatestNews />

      <WhatWeBelieve />

      
    </div>
  );
}

export default App;
