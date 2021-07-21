import React from "react";

//Components
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Sports = () => {
    return (
        <>
           <div className="container mx-auto px-4  lg:px-40">

                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-3/4">
                        <h2 className="text-2xl font-bold mb-4">Sports in Mumbai</h2>

                        <div className="flex flex-wrap "> 
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311675-wfqgcdyuue-portrait.jpg" title="Travelling Clues - Online Games" subtitle="E Sports  ₹ 149 onwards"/>   
                        </div> 

                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311675-wfqgcdyuue-portrait.jpg" title="Travelling Clues - Online Games" subtitle="E Sports  ₹ 149 onwards"/>   
                        </div> 

                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311675-wfqgcdyuue-portrait.jpg" title="Travelling Clues - Online Games" subtitle="E Sports  ₹ 149 onwards"/>   
                        </div> 

                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311675-wfqgcdyuue-portrait.jpg" title="Travelling Clues - Online Games" subtitle="E Sports  ₹ 149 onwards"/>   
                        </div> 

                    </div>
                </div>

                    <div className="lg:w-3/12 ">
                        <h2 className="text-2xl font-bold mb-4">Filter</h2>
                        <div>
                            <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
                        </div>

                        <div>
                            <PlaysFilter title="Categories" tags={["E-Sports"]}/>
                        </div>

                        <div>
                            <PlaysFilter title="More Filters" tags={["Online Streming", "Kids Allowed", "Kids Activities"]}/>
                        </div>

                        <div>
                            <PlaysFilter title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]}/>
                        </div>

                        <div className="lg:flex-col-reverse items-center mt-10">
                            <button className="text-red-700  border-2 border-red-700 py-2 px-20 rounded">
                                Browse by Venus
                            </button>
                        </div>
                    </div>                  
                </div>
               
           </div>
        </>
    )
}

export default Sports;
