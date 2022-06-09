import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function MovieAdditionForm({ mveinf, setmovieInfo }) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");
  const [trailer, setTrailer] = useState("");
  const addMovie = () => {
    const newMovie = {
      namee: name,
      imgg: image,
      ratingg: rating,
      contentt: content,
      trailerr: trailer
    };
    setmovieInfo([...mveinf, newMovie]);
    console.log(newMovie);
  };


  return (
    <div className="formSection">
      
      <TextField label="Name" variant="standard" onChange={(evt) => {
        setName(evt.target.value);
      }}/>
      <TextField label="Poster" variant="standard" onChange={(evt) => {
        setImage(evt.target.value);
      }}/>
      <TextField label="Rating" variant="standard" className="rating input" onChange={(evt) => {
        setRating(evt.target.value);
      }} />
      <TextField label="Summary" variant="standard" className="summary input" onChange={(evt) => {
        setContent(evt.target.value);
      }}/>
      <TextField label="Trailer" variant="standard" className="trailer input" onChange={(evt)=>{
        setTrailer(evt.target.value);
      }}/>
      <Button variant="outlined" className="addMovieButton" onClick={() => addMovie()}>Add Movie</Button>
    </div>
  );
}
