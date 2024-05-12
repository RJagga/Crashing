import React, { useState } from 'react';
import './App.css'
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputPage from './components/InputPage';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';
import Theory from './pages/Theory';
import Layout from './layouts/Layout';
// import { LineGraph } from './components/Graph';
// import OutputPage from './components/OutputPage';


const App = () => {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout>{<Home />}</Layout>}/>
        <Route path='/theory' element={<Layout>{<Theory/>}</Layout>}/>
        <Route path='/about' element={<Layout>{<About/>}</Layout>}/>
        <Route path='/crashinput' element={<Layout>{<InputPage/>}</Layout>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App
