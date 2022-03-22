import { useEffect, useState } from "react";
import './Films.css';
import {Link} from "react-router-dom";


const Peoples = () => {

  const [peoples, setPeoples] = useState([]);

  useEffect(() => {

    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(data => setPeoples(data))
      .catch(e => alert(e.message));

  }, []);

  return (
    <main>
      <section className="card-holder">
        {peoples.map(people => (

          <div class="cards border border-light rounded shadow" key={people.id} style={{ width: '15rem' }}  >
            <div class="card-body text-center">
              <h5 class="card-title ">{people.name}</h5>
              <hr></hr>
            </div>
            <div class="card-body text-center">
              <Link to={`/people/${people.id}`} className="btn btn-outline-primary">Full Details</Link>
            </div>
          </div>

        ))};
      </section>
    </main>
  )
}

export default Peoples;
