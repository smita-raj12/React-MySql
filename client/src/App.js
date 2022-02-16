import {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [movieName, setMovieName] = useState('')
  const [movieReview, setReview] = useState('')
  const [movieList, setMovieList] = useState([])
  const submitReview = () =>{
    
    Axios.post("http://localhost:3001/api/create", 
    {
      movieName: movieName, 
      movieReview:movieReview
    }).then(()=>{
      alert("successful insert");
    })
    console.log(movieName)
  };

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((data)=>{
      console.log(data)
      setMovieList(data.data)
    })
    .catch(function (error) {
      console.log("problem here", error);
    });
  },[])

  return (
    <div className="App">
      <h1>curd applications</h1>
      <label>Movies Name</label>
      <input type="text" name="movieName" onChange={(e)=>{
          setMovieName(e.target.value)
      }}/>
      <label>Review</label>
      <input type="text" name="Review" onChange={(e)=>{
          setReview(e.target.value)
      }}/>
      <button onClick={submitReview}>Submit</button>
      {movieList.map((val)=>{
        return <div><h4>Movie Name: {val.movieName}</h4>
          <h4>Review: {val.movieReview}</h4></div>
      })}
    </div>
  );
}

export default App;
