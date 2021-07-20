import React from "react";

//Component
import MovieNav from "../components/Navbar/movieNavbar.componenet";


const MovieLayout = (props) => {
    return (
        <>         
          <MovieNav />
          {props.children}  
        </>
    );
}

export default MovieLayout;
