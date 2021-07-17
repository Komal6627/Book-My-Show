const settings = {
    Infinity:false,
    autoplay:false,
    slidesToShow:5,
    slidesToScroll:2,
    InitialSlide:0,
    responsive: [
        {
            breakpoints:1024,
            setting:{
                slidesToShow: 3,
                slidesToScroll: 2,
                Infinite: true,
            },
        },

        {
            breakpoints:768,
            setting:{
                slidesToShow: 2,
                slidesToScroll: 1,
                InitialSlide:1,
            },
        },

        {
            breakpoints:480,
            setting:{
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
],
};

export default settings;