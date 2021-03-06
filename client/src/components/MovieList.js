import React from "react";
import {useState, useEffect} from 'react';
import '../App.css';
import Axios from 'axios';
import SearchBar from "./SearchBar";
function MovieList(){
    const [movieName, setMovieName] = useState('')
    const [movieReview, setReview] = useState('')
    const [movieList, setMovieList] = useState([])
    const [newReview, setNewReview] = useState("")
  
    const submitReview = () =>{
      
      Axios.post("http://localhost:3001/api/create", 
      {
        movieName: movieName, 
        movieReview:movieReview
      })
        setMovieList([...movieList, {movieName:movieName, movieReview:movieReview}]);
    };
  
    useEffect(()=>{
      Axios.get("http://localhost:3001/api/get").then((data)=>{
        
        setMovieList(data.data)
      })
      .catch(function (error) {
        console.log("problem here", error);
      });
    },[])
  
    const deleteMovie = (movie) =>{
          Axios.delete(`http://localhost:3001/api/delete/${movie}`)
    } 
    
    const updateReview = (movie) =>{
      Axios.put("http://localhost:3001/api/update", {
        movieName: movie,
        movieReview: newReview
      });
      setNewReview("")
    };

    return(
      
        <div className="container">
         <SearchBar placeholder = "Movies List" data = {movieList} />
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
          return <div className='card' key = {val.id}>
                  <h4>{val.movieName}</h4>
                  <p></p>
                  <h4>Review: {val.movieReview}</h4>

                  <button onClick={() => {deleteMovie(val.movieName)}}>delete</button>
                  <input type= "text" onChange={(e)=>{setNewReview (e.target.value)}}/>
                  <button onClick={() => {updateReview(val.movieName)}}>Update Review</button>
            </div>
        })}
      
       
     </div>
     
    )
   
}
export default MovieList;    