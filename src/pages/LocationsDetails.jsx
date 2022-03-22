import { useEffect,useState} from "react";
import { Link, useParams } from "react-router-dom";


const LocationsDetails = ()=> {
    const {locationid} = useParams();
    const [locations, setLocations] = useState(null);

    useEffect(() => {
       
        fetch(`https://ghibliapi.herokuapp.com/locations/${locationid}`)
          .then(res => res.json())
          .then(data => setLocations(data))
          .catch(e=>alert(e.message));
    
        }, [locationid]);

        if(!locations){
        return <h1 className="mt-2 d-flex justify-content-center">Loading...</h1>;
        };

    return(

   <section className="mt-4 d-flex justify-content-center text-center">
   <div class="card" style={{ width: '40rem' }}  >
    <div class="card-header">
      {locations.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Climate:  {locations.climate}</li>
      <li class="list-group-item">Terrain:  {locations.terrain}</li>
      <li class="list-group-item">Surface Water:  {locations.surface_water}</li>
    </ul>
    <div class="card-footer ">
      <Link to="/locations/">Return to Locations</Link>
    </div>
   </div>
   </section>
)}

export default LocationsDetails;