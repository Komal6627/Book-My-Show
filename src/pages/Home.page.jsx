import React from "react";


//Component
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";

const HomePage = () => {
    return(
        <>
            <div className="container mx-auto px-6">
                <h1 className="text-xl font-bold text-gray-800 my-3">The best of Entertainment</h1>
                <EntertainmentCardSlider/>
            </div>
        </>
    );
};

export default HomePage;