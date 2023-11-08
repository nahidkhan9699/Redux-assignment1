import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Nav } from './Nav';
import { Color } from './Color';
import Food from './Food';
export const Landing = () => {
    return (
       <BrowserRouter>
       <Nav />
       <Routes>
        <Route  path="/" element={<Food/>}/>
        <Route  path="/color" element={<Color/>}/>
        </Routes>
        </BrowserRouter>
    );
};

export default Landing;