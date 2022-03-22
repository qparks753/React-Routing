import React from "react";
import logo from "../components/logo.png";



const Home = () =>{

    return (
        <section className='home-showcase'>
        <section className='image-holder'>
        <img className='home-image' src={logo} alt="Studio Ghibli Logo" />
        </section>
        <h3 >Welcome to the Studio Ghibli API Lab</h3>
        <p> Welcome to my React Routing Lab using the Studio Ghibli API. This application takes inspiration from IMDB and focuses on the animation film studio Studio Ghibli.
        This project utilizes React, useState and useEffect hooks, Fetch, Rest API, Bootstrap, and React Router. Please use the navbar to click around and view all films, people, location, species, vehicles.
        Also, the click the full details button on each page to to see more content.Enjoy!!
        </p>
        </section>

    )
}


export default Home;