import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/App.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Films from "./pages/Films";
import FilmsDetails from "./pages/FilmsDetails"
import People from "./pages/People";
import PeopleDetails from "./pages/PeopleDetails"
import Locations from './pages/Locations';
import LocationsDetails from './pages/LocationsDetails';
import Vehicles from './pages/Vehicles';
import Species from './pages/Species';


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
            <Route path="/locations" element={<Locations />}/>
            <Route path="/locations/:locationid" element={<LocationsDetails />} />
            <Route path="/vehicles" element={<Vehicles />}/>
            <Route path="/species" element={<Species />}/>
            <Route path="*" element={<h1>Error 404 Not Found</h1>} />
            </Routes>
         </main>
        </BrowserRouter>
    );
};

export default App;