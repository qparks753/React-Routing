import { useEffect,useState} from "react";
import  './Films.css';
import {Link} from "react-router-dom";



const Locations = () => {

    const [locations, setLocations] = useState([]);
                                                    
    useEffect(() => {
       
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then(res => res.json())
      .then(data => setLocations(data))
      .catch(e=>alert(e.message));

    }, []);



    return (
        <main>
            <section className="card-holder">
                {locations.map(location=>(
                  
                 <div class="cards shadow rounded text-center" key={location.id} style={{ width: '15rem' }}  >
                 <div class="card-body">
                   <h5 class="card-title">{location.name}</h5>
                 </div>
                 <div class="card-body">
                   <Link to={`/locations/${location.id}`} className="btn btn-outline-primary">Full Details</Link>
                 </div>
               </div>
               
                ))};
            </section>
        </main>
    )

    
}
export default Locations;