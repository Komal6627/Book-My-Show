import axios from "axios";
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";


//Component
import MovieNav from "../components/Navbar/movieNavbar.componenet";

//context
import {MovieContext} from "../context/movie.context";


const MovieLayout = (props) => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  useEffect(() =>{
    const requestMovie = async () => {
        const getMovieData = await axios.get(`/movie/${id}`);
        setMovie(getMovieData.data);
    };
    requestMovie();
  }, []);
    return (
      <>         
        <MovieNav />
        {props.children}  
      </>
    );
}

export default MovieLayout;
