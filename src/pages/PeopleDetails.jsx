import { useEffect,useState} from "react";
import { Link, useParams } from "react-router-dom";


const PeopleDetails = ()=> {
    const {peopleid} = useParams();
    const [peoples, setPeoples] = useState(null);

    useEffect(() => {
       
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
          .then(res => res.json())
          .then(data => setPeoples(data))
          .catch(e=>alert(e.message));
    
        }, [peopleid]);

        if(!peoples){
        return <h1 className="mt-2 d-flex justify-content-center">Loading...</h1>;
        };

    return(

   <section className="mt-4 d-flex justify-content-center text-center">
   <div class="card" style={{ width: '40rem' }}  >
    <div class="card-header">
      {peoples.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Gender:  {peoples.gender}</li>
      <li class="list-group-item">Age:  {peoples.age}</li>
      <li class="list-group-item">Eye Color:  {peoples.eye_color}</li>
      <li class="list-group-item">Hair Color: {peoples.hair_color}</li>
    </ul>
    <div class="card-footer ">
      <Link to="/people/">Return to People</Link>
    </div>
   </div>
   </section>
)}

export default PeopleDetails;


