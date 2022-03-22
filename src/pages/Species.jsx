
import { useEffect,useState} from "react";
import  './Films.css';




const Species = () => {

    const [species, setSpecies] = useState([]);
                                                    
    useEffect(() => {
       
    fetch("https://ghibliapi.herokuapp.com/species")
      .then(res => res.json())
      .then(data => setSpecies(data))
      .catch(e=>alert(e.message));

    }, []);



    return (
        <main>
            <section className="card-holder">
                {species.map(species=>(
                  
                 <div class="cards border border-light shadow rounded text-center" key={species.id} style={{ width: '15rem' }}  >
                 <div class="card-body">
                   <h5 class="card-title">{species.name}</h5>
                   <hr></hr>
                 </div>
                 <ul class="list-group list-group-flush">
                 <li class="list-group-item">Classification: {species.classification}</li>
                   <li class="list-group-item">Eye Colors: {species.eye_colors}</li>
                   <li class="list-group-item">Hair Colors: {species.hair_colors}</li>
                 </ul>
               </div>
               
                ))};
            </section>
        </main>
    )

    
}
export default Species;