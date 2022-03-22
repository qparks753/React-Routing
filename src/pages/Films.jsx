

import { useEffect,useState} from "react";
import  './Films.css';
import {Link} from "react-router-dom";



const Films = () => {

    const [films, setFilms] = useState([]);
                                                    
    useEffect(() => {
       
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(data => setFilms(data))
      .catch(e=>alert(e.message));

    }, []);



    return (
        <main>
            <section className="card-holder">
                {films.map(film=>(
                  
                 <div class="cards" key={film.id} style={{ width: '15rem' }}  >
                 <img class="card-img-top" src={film.image} alt="Film" ></img>
                 <div class="card-body">
                   <h5 class="card-title">{film.title}</h5>
                   <p class="card-text">{`${film.description.substring(0,175)}...`}</p>
                 </div>
                 <div class="card-body">
                   <Link to={`/films/${film.id}`} className="btn btn-outline-primary">Full Details</Link>
                 </div>
               </div>
               
                ))};
            </section>
        </main>
    )

    
}
export default Films;

