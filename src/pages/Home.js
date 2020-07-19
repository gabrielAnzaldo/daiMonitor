import React from 'react';
import { Link } from '@reach/router';

const Home = () => {
  return(
    <div className="home-page">
      <Link to="/alarma">CREAR ALARMA</Link>
    </div>
  );
};

export default Home;
