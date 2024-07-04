import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header/Header';
import Home from './Home';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';


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
      </section>
    </Element>
  );
};

export default App;
