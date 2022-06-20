import { useEffect ,useState} from 'react';
import { MovieCard } from './MovieCard';

export function Movies() {
  
  const[movieInfo,setmovieInfo]=useState([]);

  function getMovieAPI(){
    fetch("https://62a97085ec36bf40bdb787b6.mockapi.io/movies")
    .then((data)=>data.json())
    .then((mvs)=>setmovieInfo(mvs));
  }

  useEffect(()=>{
    getMovieAPI();
  },[]);

  return (
    <div className="movieList">
      {movieInfo.map((value, index) => {
        return <MovieCard key={value.id} id={value.id} img={value.imgg} name={value.namee} rating={value.ratingg} 
                          content={value.contentt} mveinf={movieInfo} setmovieInfo={setmovieInfo} getMovieAPI = {getMovieAPI} />;
      })}
    </div>
  );
}
