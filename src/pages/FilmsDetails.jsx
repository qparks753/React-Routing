import { useEffect,useState} from "react";
import { Link, useParams } from "react-router-dom";




const FilmsDetails = ()=> {
    const {filmid} = useParams();
    const [films,setFilms] = useState(null);


    useEffect(() => {
       
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
          .then(res => res.json())
          .then(data => setFilms(data))
          .catch(e=>alert(e.message));
    
        }, [filmid]);

        if(!films){
                  return <h1>Loading...</h1>;
                }



  return(
   <section className="mt-4 d-flex justify-content-center text-center">
 <div class="card" style={{ width: '20rem' }}  >
  <div class="card-header">
    {films.title}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{films.description}</li>
    <li class="list-group-item">{films.director}</li>
    <li class="list-group-item">{films.producer}</li>
    <li class="list-group-item">{films.release_date}</li>
    <li class="list-group-item">{films.running_time} Minutes</li>
    <li class="list-group-item">{films.rt_score>70?<span style={{ color:"green" }}>{films.rt_score} </span>:<span  style={{ color:"red" }}>{films.rt_score}</span>}</li>
  </ul>
  <div class="card-footer ">
    <Link to="/films/">Return to Films</Link>
  </div>
 </div>
 </section>
  )



}
export default FilmsDetails;





// import { useEffect,useState} from "react";
// import { ListGroupItem } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import  './Films.css';
// import {Link,useParams} from "react-router-dom";



// const Films = () => {

//     const [films, setFilms] = useState(null);
//     const {filmid} = useParams();

//     useEffect(() => {
       
//        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
//             .then(res => res.json())
//             .then(data => setFilms(data))
//             .catch(e=>alert(e.message));

//     }, [filmid]);

//     if(!films){
//       return <h1>Loading...</h1>;
//     }


//     return (
//         <main>
//             <section className="card-holder">
              
        
//                 {films.map(film=>(

//                     <Card key={film.id} style={{ width: '15rem' }}>
//                     <Card.Img variant="top" src={film.image} />
//                     <Card.Body>
//                       <Card.Title>{film.title}</Card.Title>
//                       <Card.Text>
//                         {film.description}
//                       </Card.Text>
//                     </Card.Body>
//                     <ListGroup className="list-group-flush">
//                       <ListGroupItem>{film.director}</ListGroupItem>
//                       <ListGroupItem>{film.producer}</ListGroupItem>
//                       <ListGroupItem>{film.release_date}</ListGroupItem>
//                       <ListGroupItem> {film.running_time} Minutes</ListGroupItem>
//                       <ListGroupItem> {film.rt_score>70?<span style={{ color:"green" }}>{film.rt_score} </span>:<span  style={{ color:"red" }}>{film.rt_score}</span>}</ListGroupItem>
//                     </ListGroup>
//                   </Card>
//                 ))};
//             </section>
//         </main>
//     )

    
// }