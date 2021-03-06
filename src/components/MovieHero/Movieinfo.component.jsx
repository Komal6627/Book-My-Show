import React, { useContext } from "react";

//Context
import { MovieContext } from "../../context/movie.context";

const MovieInfo = () => {
    const { movie } = useContext( MovieContext );

    const genres = movie.genres?.map(({ name }) => name).join(", ");

    return (
        <>
            <div className="flex flex-col gap-3 lg:gap-8">
                <div className="flex items-center gap-3 md:px-4">
                    <div className="w-40 h-8">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="Premier" className="w-full h-full" />
                    </div>
                    <span className="bg-gray-700 p-1 text-xs text-white rounded-md">Streming Now</span>
                </div>
                <h1 className="text-white lg:text-5xl font-bold hidden lg:block"> { movie.original_title } </h1>

                <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col">
                    <div className="text-white font-light flex flex-col gap-2 md:px-4">
                        <h4>4k &bull; { movie.original_language } &bull; </h4>
                        <h4> {( movie.runtime / 60 ).toFixed(2) }h  &bull; { genres } &bull;  13+ </h4>
                    </div>

                    <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Rent ₹149
                        </button>

                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                             Buy ₹149
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieInfo;
