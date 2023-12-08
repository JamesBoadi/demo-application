import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Home from './pages/Home';
import Wiki from './pages/Wiki';
import Contact from './pages/Contact';
import NavigationBar from './components/navigation/NavigationBar';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';

const App = () => {
  const [currentPageTitle, setCurrentPageTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [pageHistory, setPageHistory] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${currentPageTitle}`, { replace: true });
  }, [currentPageTitle]);

  // Redirect Page
  const redirectPage = (index: number) => {
    setIndex(index);
    console.log(index);
    switch (index) {
      case 1:
        setCurrentPageTitle("Home");
        break;
      case 2:
        setCurrentPageTitle("Wiki");
        break;
      case 3:
        setCurrentPageTitle("Contact");
        break;

      default:
        setIndex(0);
        break;
    }
  }


  return (
    <>
      <NavigationBar redirectPage={redirectPage} />

      <Routes>
        <Route path='/' element={<>
          <header>
            <a>
              Welcome aboard!
            </a>
          </header>
        </>} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Wiki' element={<Wiki />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
