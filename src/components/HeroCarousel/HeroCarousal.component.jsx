import React from "react";
import HeroSlider from "react-slick";

//Componenet
import { NextArrow, PrevArrow } from "./Arrows.component";


const HeroCarousel = () => {

    const settingsLG = {
        arrows:true,
        autoplay:true,
        centerMode:true,
        centerPadding:"300px",
        slidesToShow: 1,
        infinite:true,
        slidesToScroll:1,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
    };

    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
      };
      
    const images = [
        "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        "https://images.unsplash.com/photo-1626275418623-0df0f07ce59c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        "https://images.unsplash.com/photo-1626185748518-6a979b2c51bd?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        "https://images.unsplash.com/photo-1626233097365-1128066ae527?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ]; 

    return (
       <>
        <div className="lg:hidden">
            <HeroSlider {...settings}>
                {
                    images.map((image) => (
                        <div className="w-full h-56 md:h-80 py-3">
                            <img src={image} alt="testing" className = "w-full h-full" />
                        </div>
                    ))
                }
            </HeroSlider>      
        </div>


        <div className="hidden lg:block">
        <>
            <HeroSlider {...settingsLG}>
                {
                    images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img src={image} alt="testing" className = "w-full h-full rounded-md" />
                        </div>
                    ))
                }
            </HeroSlider>
        </>
        </div>


       </>
    );
};

export default HeroCarousel;