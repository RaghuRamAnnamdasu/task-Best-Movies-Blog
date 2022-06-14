// import logo from './logo.svg';
import './App.css';
import {createContext, useContext, useState} from "react";
import {AddColor} from "./AddColor";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { MovieCard } from './MovieCard';
import { MovieAdditionForm } from './MovieAdditionForm';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MovieDetails } from './MovieDetails';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TextField from '@mui/material/TextField';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const mveinf = [
  {
    imgg : "https://wallpaperaccess.com/full/1266291.jpg",
    namee : "Titanic",
    ratingg : 7.9,
    contentt : "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    trailerr : "https://www.youtube.com/embed/kVrqfYjkTdQ"
  },
  {
    imgg : "https://www.xtrafondos.com/descargar.php?id=2728&vertical=1",
    namee : "Ben-Hur",
    ratingg : 8.1,
    contentt : "After a Jewish prince is betrayed and sent into slavery by a Roman friend in 1st-century Jerusalem, he regains his freedom and comes back for revenge.",
    trailerr : "https://www.youtube.com/embed/NR1ZHKw09n8"
  },
  {
    imgg : "https://static.toiimg.com/photo/msid-5348868/5348868.jpg?26276",
    namee : "Avatar",
    ratingg : 7.8,
    contentt : "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home. ",
    trailerr : "https://www.youtube.com/embed/5PSNL1qE6VY"
  },
  {
    imgg : "https://i.pinimg.com/originals/6b/40/c5/6b40c5d03dfce1084dea4829bc7310a1.jpg",
    namee : "Harry Potter and the Goblet of Fire",
    ratingg : 7.7,
    contentt : "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
    trailerr : "https://www.youtube.com/embed/3EGojp4Hh6I"
  },
  {
    imgg : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    namee : "The Avengers",
    ratingg : 8,
    contentt : "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
    trailerr : "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    imgg : "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    namee : "Baahubali",
    ratingg : 8,
    contentt : "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailerr : "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    imgg : "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    namee : "Interstellar",
    ratingg : 8.6,
    contentt : "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    trailerr : "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    imgg : "https://stat1.bollywoodhungama.in/wp-content/uploads/2021/10/Pushpa.jpeg",
    namee : "Pushpa",
    ratingg : 7.6,
    contentt : "Story of Pushpa Raj, a lorry driver in Seshachalam forests of South India, set in the backdrop of red sandalwood smuggling. Red Sandalwood is endemic to South-Eastern Ghats (mountain range) of India.",
    trailerr : "https://www.youtube.com/embed/Q1NKMPhP8PY"
  },
  {
    imgg : "https://m.media-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
    namee : "Bahubali 2",
    ratingg : 8.2,
    contentt : "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
    trailerr : "https://www.youtube.com/embed/G62HrubdD6o"
  },
  {
    imgg : "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_FMjpg_UX1000_.jpg",
    namee : "KGF Chapter 2",
    ratingg : 8.7,
    contentt : "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy.",
    trailerr : "https://www.youtube.com/embed/JKa05nyUmuQ"
  },
  {
    imgg : "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/Dangal-1.jpg",
    namee : "Dangal",
    ratingg : 8.3,
    contentt : "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
    trailerr : "https://www.youtube.com/embed/x_7YlGv9u1g"
  },
  {
    imgg : "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg",
    namee : "PK",
    ratingg : 8.1,
    contentt : "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religion on its people.",
    trailerr : "https://www.youtube.com/embed/SOXWc32k4zA"
  }
];



function App() {
  const [mode,setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  const[movieInfo,setmovieInfo]=useState(mveinf);
  const navigate = useNavigate();
  function AddMovies(){
    return(
      <div className="movieAddition">
        <MovieAdditionForm mveinf={movieInfo} setmovieInfo={setmovieInfo} />
      </div> 
    );
  }
  function Movies(){
    return(
      <div className="movieList">
        {movieInfo.map((value,index)=>{
          return <MovieCard key = {index} id = {index} img = {value.imgg} name = {value.namee} rating = {value.ratingg} content = {value.contentt} />
        })}
      </div>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{minHeight:"100vh", borderRadius:"0px"}}>
        <div className="App">
          
            <AppBar position="static">
              <Toolbar>
                <Button color="inherit" onClick = {()=> navigate("/")}>Home</Button>
                <Button color="inherit" onClick = {()=> navigate("/about")}>About</Button>
                <Button color="inherit" onClick = {()=> navigate("/movies")}>Movies</Button>
                <Button color="inherit" onClick = {()=> navigate("/addmovies")}>Add Movies</Button>
                <Button color="inherit" onClick = {()=> navigate("/addcolor")}>Color Game</Button>
                <Button color="inherit" onClick = {()=> navigate("/tictactoe")}>Tic-Tac-Toe</Button>
                <Button color="inherit" onClick = {()=> 
                  setMode(mode==="light" ? "dark" : "light")
                  }>{mode==="light" ? <Brightness7Icon/> : <Brightness4Icon/>}
                    {mode==="light" ? "Dark Mode" : "Light Mode"}</Button>
              </Toolbar>
            </AppBar>
              
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/addmovies"element={<AddMovies />}/>
            <Route path="/addcolor" element={<AddColor />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/movies/:id" element={<MovieDetails movieList={movieInfo}/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  )
  
}
function NotFound(){
  return <h1>404 not found</h1>
}
function Home(){
  return <h1>Welcome to the movie app</h1>
}
function About(){
  return <h1>This is all about movies</h1>
}




const scoreUpdation = createContext();
const playerUpdation = createContext();
var finalIndex=[];



function TicTacToe(){
  const [score1,setScore1] = useState(0);
  const [score2,setScore2] = useState(0);
  var scoreArray=[score1,score2,setScore1,setScore2];
  var initialPlayerObj={ player1 : "player1", player2 : "player2"};
  const[playerObj,setPlayerObj] = useState(initialPlayerObj);
  var playerArray=[playerObj, setPlayerObj, initialPlayerObj];
 return(
  <scoreUpdation.Provider value = {scoreArray}>
    <playerUpdation.Provider value = {playerArray}>
      <div className="tictactoe">
        <h1>Tic-Tac-Toe Game</h1>
        <Board />
      </div> 
    </playerUpdation.Provider>
 </scoreUpdation.Provider>
 )
}

function Board(){ 
const[playerObj,setPlayerObj,initialPlayerObj] = useContext(playerUpdation);
const [winner, setWinner] = useState("");
const [isXTurn, setIsXturn] = useState(true);
var initialData = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null
]
const [board,setBoard] = useState(initialData);
  
return(
  <div className="gameWrapper">
    <div className="boardEnclosure">
      <Form isXTurn={isXTurn}/>
      <div className="board">
        {board.map((value,index)=>{
          return <GameBox val={value} index={index} board={board} setBoard={setBoard} isXTurn={isXTurn} setIsXturn={setIsXturn} winner={winner}/>
        })}
      </div>
      <div className = "reset">
        <Button variant="contained" onClick = {()=> {
          setBoard(initialData);
          setWinner("");
          setPlayerObj(initialPlayerObj);
          setIsXturn(true);
          finalIndex=[];
          // console.log()
        }}>RESET</Button>
      </div>
    </div>
    <WinnerFunction winner={winner} setWinner={setWinner} board={board}/>
  </div>
)
}

function GameBox({val,index,board,setBoard, isXTurn, setIsXturn,winner}){
  const[playerObj,setPlayerObj] = useContext(playerUpdation);
  var temp=[...board];
  var [a,b,c] = finalIndex;
    return(
      <div className = {temp[index]==="X" ? `xGameBox ${finalIndex.includes(index) ? "sucessBackground" : ""}` : `oGameBox ${finalIndex.includes(index) ? "sucessBackground" : ""}`} onClick={()=>{
        if(!temp[index] && !winner){
          temp[index] = isXTurn ? "X" : "O";
          setBoard(temp);
          setIsXturn(!isXTurn);
          val = temp[index];
        }
      }}>{val}</div>
    ) 
}

function WinnerFunction({winner, setWinner, board}){
  const[score1,score2,setScore1,setScore2] = useContext(scoreUpdation);
  const[playerObj,setPlayerObj] = useContext(playerUpdation);
  var winCase = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  // console.log(board);
  winCase.map((value)=>{
    for(var i=0;i<value.length;i++){
      var [a,b,c] = value;
      // console.log(a,b,c);
      if(board[a]!==null && board[a]===board[b] && board[a]===board[c]){
        setWinner(board[a]==="X" ? playerObj.player1 : playerObj.player2);
        finalIndex=[a,b,c];
        // console.log(a);
      }
    }
  })
  var count = 0;
  var display="";
  for(var i=0;i<board.length;i++){
    if(board[i]){
      count = count+1;
    }
  }
  if(count!==0 && winner){
    display=` Winner is ${winner} `;
  }else if(count === 9 && !winner){
    display = "Game is a Tie";
  }
  return(
    <div className = "result">
     <div>{display}</div>
     {winner && <Celebrations/>}
    </div>
  )
}

// function ScoreCard(){

//   return(
//     <div>
//       <Form />
//     </div>
//   )
// }
function Form({isXTurn}){
  const[score1,score2,setScore1,setScore2] = useContext(scoreUpdation);
  const[playerObj,setPlayerObj] = useContext(playerUpdation);
  var temp = {...playerObj};
  return(
    <div className = "formEnclosure">
      <div className = "playerDetailsWrapper">
        <TextField className={isXTurn ? "player1Input" : ""} label="Player1"  value={playerObj.player1} variant="standard" onChange={(evt) => {
          temp.player1=evt.target.value;
          setPlayerObj(temp);
        }}/>
        <TextField className={!isXTurn ? "player2Input" : ""} label="Player2" value={playerObj.player2} variant="standard" onChange={(evt) => {
          temp.player2=evt.target.value;
          setPlayerObj(temp);
        }}/>
      </div>
    </div>
  )
}

function Celebrations(){
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width - 50}
      height={height - 50}
      numberOfPieces={500}
    />
  )
}

export {App};


