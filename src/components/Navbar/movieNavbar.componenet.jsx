import React, {useContext} from "react";
import {BiChevronRight, BiSearch, BiMenu, BiChevronDown, BiShareAlt} from "react-icons/bi";

//Context
import { MovieContext } from "../../context/movie.context";

const NavSm = () => {
    const {movie} =  useContext(MovieContext);
    return(
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                <h3 className="text-xl font-bold">{movie.original_title}</h3>
                </div>

                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>    
        </>
    );
};


const NavLg = () =>{
    return(
        <> 
            <div className="container mx-auto px-4 flex items-center justify-between ">
                <div className="flex item-center w-3/5 gap-3">
                    <div className="w-12 h-12">
                        <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.pngvlo" alt="logo"
                        className="w-full h-full" />
                    </div>

                    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                        <BiSearch />
                        <input type="search" className="w-full bg-tranparent border-none focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
                        Mumbai <BiChevronDown/>
                    </span>
                    <button className="bg-red-600 text-white px-1 py-1 text-sm rounded">Sign in</button>
                    <div className = "w-8 h-8 text-white">
                        <BiMenu className = "w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    );
};

const MovieNav = () =>{
   return(
    <>
        <nav className=" absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blure-lg  lg:relative  lg:bg-gray-700 p-4">
            <div className="md:hidden lg:hidden">
                {/* {Mobile screen} */}
                <NavSm/>
            </div>
            <div className="hidden md:block lg:hidden">
                {/* {Medium screen} */}
                <NavSm/>
            </div>
            <div className="hidden lg:flex">
                {/* { PC screen} */}
                <NavLg />
                </div>
        </nav>
    </>
   );
};

export default MovieNav;
