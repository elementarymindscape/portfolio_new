import React, { useState } from 'react';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Tabs/Navbar';
import SwipeableViews from 'react-swipeable-views';
import Footer from './Components/Footer/Footer';
import { Typography } from '@mui/material';
import Projects from './Components/Projects/Projects';

function TabContainer({ children }) {
  return (
    <Typography className="mx-auto h-full " component="div">
      {children}
    </Typography>
  );
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleChangeIndex(index) {
    setActiveIndex(index);
  }

  function handleChange(event, value) {
    setActiveIndex(Number(value));
  }
  return (
    <div className="h-screen w-screen d-flex flex-col">
      <Navbar activeIndex={activeIndex} handleChange={handleChange} />
      <div className="mx-auto h-eighty md:h-ninety flex justify-center items-center">
        <SwipeableViews
          axis={'x'}
          index={activeIndex}
          enableMouseEvents="true"
          onChangeIndex={(index) => handleChangeIndex(index)}
        >
          <TabContainer>
            <Home />
          </TabContainer>
          <TabContainer>
            <Projects />
          </TabContainer>
          <TabContainer>
            <Contact />
          </TabContainer>
        </SwipeableViews>
      </div>
      <Footer />
    </div>
  );
}

export default App;
