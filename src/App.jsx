import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/App.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Films from "./pages/Films";
import FilmsDetails from "./pages/FilmsDetails"
import People from "./pages/People";
import PeopleDetails from "./pages/PeopleDetails"


const App = () => {
   
    return (
        <BrowserRouter>
           <Navbar />
         <main>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Films />} />
            <Route path="/films/:filmid" element={<FilmsDetails />} />
            <Route path="/people" element={<People />}/>
            <Route path="/people/:peopleid" element={<PeopleDetails />} />
            <Route path="*" element={<h1>Error 404 Not Found</h1>} />
            </Routes>
         </main>
        </BrowserRouter>
    );
};

export default App;