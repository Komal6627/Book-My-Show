import React from "react";

const Poster = (props) => {
    return(
        <>
            <div className="flex flex-col items-start gap-2 px-5">
                <div className = "h-80">
                    <img src={props.src} alt={props.title}  className="w-full h-full rounded-md"/>
                </div>

                <h3 className={`text-xl font-bold ${props.isDark ? "text-white": "text-gray-700"}`}>{props.title}</h3>

                <p className={`text-sm  ${props.isDark ? "text-white":"text-gray-700"}`}>{props.subtitle}</p>
            </div>
        </>
    );
};

export default Poster;