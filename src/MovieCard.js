import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from './Counter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


// function Form(){
//   <MovieAdditionForm />
// }
export function MovieCard({ img, name, rating, content, id }) {
  const styles = {
    color: rating > 8 ? "green" : "red"
  };
  const [show, setShow] = useState(true);
  const paraStyles = {
    display: show ? "block" : "none"
  };
  const navigate = useNavigate();
  return (
    <Card variant="outlined" >
      <div className="movieCard">
        <img className="movieImage" src={img} alt={name} />
        <CardContent>
        <div className="movieCredentials">
          <span className="movieName">{`${name}`}
          {/* <InfoIcon  className = "infoIcon" onClick={() => {
              navigate(`/movies/${id}`);
            }} /> */}
          <IconButton 
            aria-label="Movie Details"
            size="small" 
            className = "infoIcon"
            color = "primary" 
            onClick={() => {
              navigate(`/movies/${id}`);
            }} >
            <InfoIcon />
          </IconButton>
          {/* <button onClick={() => {
              navigate(`/movies/${id}`);
            }}
            >
              Info
            </button> */}
            <IconButton 
            aria-label="Movie summary" 
            size="small"
            color = "primary" 
            onClick={() => {
              return setShow(!show);}} >
              {show ? <KeyboardControlKeyIcon /> : <ExpandMoreIcon />}
            </IconButton>
            
            {/* <KeyboardControlKeyIcon onClick={() => {
              return setShow(!show);}} />
            
            <ExpandMoreIcon onClick={() => {
              return setShow(!show);}} /> */}
            
            {/* <button onClick={() => {
              return setShow(!show);
            }}
            >
              Toggle
            </button> */}
          </span>
          <span style={styles} className="movieRating">⭐ {rating} </span>
        </div>
        <div style={paraStyles} className="movieDescription">{content}</div>
        </CardContent>
        <CardActions>
          <Counter />
        </CardActions>
      </div>
    </Card>
  );

}
