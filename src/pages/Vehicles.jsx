
import { useEffect,useState} from "react";
import  './Films.css';
import {Link} from "react-router-dom";



const Vehicles = () => {

    const [vehicles, setVehicles] = useState([]);
                                                    
    useEffect(() => {
       
    fetch("https://ghibliapi.herokuapp.com/vehicles")
      .then(res => res.json())
      .then(data => setVehicles(data))
      .catch(e=>alert(e.message));

    }, []);



    return (
        <main>
            <section className="card-holder">
                {vehicles.map(vehicle=>(
                  
                 <div class="cards border border-dark rounded text-center" key={vehicle.id} style={{ width: '15rem' }}  >
                 <div class="card-body">
                   <h5 class="card-title">{vehicle.name}</h5>
                 </div>
                 <ul class="list-group list-group-flush">
                   <li class="list-group-item">Description: {vehicle.description}</li>
                   <li class="list-group-item">Class: {vehicle.vehicle_class}</li>
                   <li class="list-group-item">Length: {vehicle.length}</li>
                 </ul>
               </div>
               
                ))};
            </section>
        </main>
    )

    
}
export default Vehicles;
