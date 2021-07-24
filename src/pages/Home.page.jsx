import axios from "axios";
import React, { useState, useEffect } from "react";


//Component
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import  PosterSlider from "../components/PosterSlider/PosterSlider.component";

//configs
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, settopRatedMovies] = useState([]);
    const [upComingMovies, setupComingMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    },[]);

    useEffect(() => {
        const requestTopRatedMovies = async () =>{
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            settopRatedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    },[]);

    useEffect(() => {
        const requestUpComingMovies = async () => {
            const getUpComingMovies = await axios.get("/movie/upcoming");
            setupComingMovies(getUpComingMovies.data.results);
        };
        requestUpComingMovies();
    },[]);
    

    return(
        <>
           <div className="flex flex-col gap-10">
                <div className="container mx-auto px-10">
                     <h1 className="text-xl font-bold text-gray-800 my-3">
                         The best of Entertainment
                     </h1>
                     <EntertainmentCardSlider/>
                 </div>

                 <div className="bg-bms-800 py-10  ">
                    <div className="container mx-auto px-6 flex flex-col gap-3">
                        <div className="hidden  md:flex">
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premier" 
                                className="w-full h-full"/>
                        </div>
                        <PosterSlider images={ popularMovies } title="Premiers" subtitle="Brand new realses every friday" isDark/>
                    </div>
                </div>
           </div>

            <div className="container mx-auto px-8 my-8">
                <PosterSlider images={topRatedMovies} title="Online Streaming Events" isDark={false} />
            </div>


            <div className="container mx-auto px-8 my-8">
                <PosterSlider images={upComingMovies} title="Outdoor Events" isDark={false} />
            </div>
        </>
    );
};

export default HomePage;