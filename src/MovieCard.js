import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from './Counter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import InfoIcon from '@mui/icons-material/Info';

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
    <div className="movieCard">
      <img className="movieImage" src={img} alt={name} />
      <div className="movieCredentials">
        <span className="movieName">{`${name} `}
        <InfoIcon  className = "infoIcon" onClick={() => {
            navigate(`/movies/${id}`);
          }} />
         {/* <button onClick={() => {
            navigate(`/movies/${id}`);
          }}
          >
            Info
          </button> */}
          {show ? <KeyboardControlKeyIcon onClick={() => {
            return setShow(!show);}} />
          : <ExpandMoreIcon onClick={() => {
            return setShow(!show);}} />
          }
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
      <Counter />
    </div>
  );

}
