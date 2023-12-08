import React from 'react';
import * as api from '../api/api';

const Home = () => {

  const loadPage = () => {

    // Call to server to load page details from database
    api.getPageDetails();
  }


  return (

    <div>
      <header >
        <a >
          Welcome to the Home page
        </a>
      </header>
    </div>
  );
}

export default Home;
