import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const styles = {
    color: movieList[id].ratingg > 8 ? 'green' : 'red'
  };
  return (
    <div className="movieDetailsContainer">
      <iframe
        width="100%"
        height="800"
        src={movieList[id].trailerr}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
      <div className="movieDetailContainer">
        <div className="movieCredentials">
          <h2 className="movieName">{movieList[id].namee}</h2>
          <p className='movieRating' style={styles}>⭐ {movieList[id].ratingg}</p>
        </div>
        <p className='movieDescription'>{movieList[id].contentt}</p>

        <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />} onClick={() => {
          return navigate(-1);
        }}
        >
          Back</Button>
      </div>
    </div>
  );
}
