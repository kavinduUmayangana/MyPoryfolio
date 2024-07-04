import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header/Header';
import Home from './Home';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import MyProject from './components/MyProject/MyProject';
import LookingFor from './components/LookingFor/LookingFor';
import Contact from './components/Contact/Contact';
import BackToTopBtn from './components/BackToTopBtn/BackToTopBtn';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <Element className="">
      <section>
        <Header />
        <Element name="home">
          <Home />
        </Element><Element name="profile-details">
          <ProfileDetails />
        </Element>
         <Element name="skills">
          <Skills />
        </Element>
        <Element name="Education">
         <Education/> 
        </Element>
        
        
         <Element name="myProject">
          <MyProject />
        
        </Element>
        <Element name="LookingForI">
         <LookingFor/> 
        </Element>
       
       
        <Element name="Contact">
          <Contact/>
        </Element>
        <Footer />
        <BackToTopBtn/>
      </section>
    </Element>
  );
};

export default App;
