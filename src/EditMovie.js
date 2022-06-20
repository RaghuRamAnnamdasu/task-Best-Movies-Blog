import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function EditMovie() {

  const[movie,setMovie]=useState(null);
  const { id } = useParams();
  
  function getMovieAPI(){
    fetch(`https://62a97085ec36bf40bdb787b6.mockapi.io/movies/${id}`)
    .then((data)=>data.json())
    .then((mvs)=>setMovie(mvs));
  }

  useEffect(()=>{
    getMovieAPI();
  },[]);



  



  return(
    movie ? <MovieEditCore movie={movie}/> : "Loading..."
  )
}




  function MovieEditCore({movie}){
    const [name, setName] = useState(movie.namee);
    const [image, setImage] = useState(movie.imgg);
    const [rating, setRating] = useState(movie.ratingg);
    const [content, setContent] = useState(movie.contentt);
    const [trailer, setTrailer] = useState(movie.trailerr);
    const navigate = useNavigate();

    const editMovie = () => {
      const editedMovie = {
        namee: name,
        imgg: image,
        ratingg: rating,
        contentt: content,
        trailerr: trailer
      };
      // setmovieInfo([...movieInfo, newMovie]);
      // console.log(newMovie);
      editMovieAPI(editedMovie);
    };


    
    function editMovieAPI(editedMovie){
      fetch(`https://62a97085ec36bf40bdb787b6.mockapi.io/movies/${movie.id}`,
        {
          method:"PUT",
          body : JSON.stringify(editedMovie),
          headers : {"Content-Type":"application/json"}
        }
      ).then(()=>navigate("/movies"))
        // .then((data)=>data.json())
        // .then((mvs)=>setmovieInfo(mvs));
    }
    return (
      <div className="formSection">

        <TextField label="Name" value={name} variant="standard" onChange={(evt) => {
          setName(evt.target.value);
        }} />
        <TextField label="Poster" value={image} variant="standard" onChange={(evt) => {
          setImage(evt.target.value);
        }} />
        <TextField label="Rating" value={rating} variant="standard" className="rating input" onChange={(evt) => {
          setRating(evt.target.value);
        }} />
        <TextField label="Summary" value={content} variant="standard" className="summary input" onChange={(evt) => {
          setContent(evt.target.value);
        }} />
        <TextField label="Trailer" value={trailer} variant="standard" className="trailer input" onChange={(evt) => {
          setTrailer(evt.target.value);
        }} />
        <Button variant="outlined" className="addMovieButton" onClick={() => editMovie()}>SAVE Movie</Button>
      </div>
    );
  }
