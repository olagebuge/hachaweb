import React from 'react';
import TopBlock from './TopBlock';
import MiddleBlock from './MiddleBlock';
import BottomBlock from './BottomBlock';

const Homepage = () => {
  return (
    <section className="wrapper">      
      <TopBlock />
      <MiddleBlock />
      <BottomBlock />
    </section>
  )
}

export default Homepage