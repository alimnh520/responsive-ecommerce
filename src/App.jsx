import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';

import { ProductPage } from './components/ProductPage';
import ExampleCarousel from './components/SliderPage';
import { License } from './components/License';
import { AboutUs } from './components/AboutUs';
import { Collections } from './components/Collections';
import { MessageUs } from './components/MessageUs';
import { Footer } from './components/Footer';
import { CopyRight } from './components/CopyRight';
import Header from './components/Header';
import { HoverHeader } from './components/headerHover/Hover';

const App = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  if (loader) return (
    <div className="h-screen w-full flex items-center justify-center">
      <img src="/16-45-17-12_512.gif" alt="" className='h-52' />
    </div>
  )
  return (
    <div className="h-auto w-full overflow-hidden relative font-sans">
      <HoverHeader>
        <Header />
      </HoverHeader>

      <Element id="home" className="element">
        <ExampleCarousel />
      </Element>

      <License />

      <Element id="product" className="element">
        <ProductPage />
      </Element>

      <Element id="feature" className="element">
        <AboutUs />
      </Element>

      <Element id="category" className="element">
        <Collections />
      </Element>

      <MessageUs />
      <Footer />
      <CopyRight />
    </div>
  )
}
export default App