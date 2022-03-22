import React from "react";
import logo from "../components/logo.png";



const Home = () =>{

    return (
        <section className='home-showcase'>
        <section className='image-holder'>
        <img className='home-image' src={logo} alt="Studio Ghibli Logo" />
        </section>
        <h3 >Welcome to the Studio Ghibli Api Lab</h3>
        <p>This lab highlights the usage of React and Api skills. It uses conditional rendering,
        data fetching from a REST Api through using a useEffect hook, manages multiple array maps using
        an useState hook, and Bootstrap for style. Please click the buttons to view resources.  </p>
        </section>

    )
}


export default Home;