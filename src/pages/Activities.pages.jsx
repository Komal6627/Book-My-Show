import React from "react";


//Components
import Poster from "../components/Poster/poster.component";
import Filters from "../components/Filters/Filters.component";

const Activities = () => {
    return (
        <>
           <div className="container mx-auto px-4  lg:px-40">

                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-3/4">
                        <h2 className="text-2xl font-bold mb-4">Activities in Mumbai</h2>

                        <div className="flex flex-wrap "> 
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00127447-lslwxfelxy-portrait.jpg"   title="Bounce" subtitle="Gaming  ₹ 629 onwards"/>   
                        </div> 

                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00127447-lslwxfelxy-portrait.jpg"   title="Bounce" subtitle="Gaming  ₹ 629 onwards"/>   
                        </div> 

                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00127447-lslwxfelxy-portrait.jpg"   title="Bounce" subtitle="Gaming  ₹ 629 onwards"/>   
                        </div> 

                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00127447-lslwxfelxy-portrait.jpg"   title="Bounce" subtitle="Gaming  ₹ 629 onwards"/>   
                        </div> 
                    </div>
                </div>

                    <div className="lg:w-3/12 ">
                        <h2 className="text-2xl font-bold mb-4">Filter</h2>
                        <div>
                            <Filters title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
                        </div>

                        <div>
                            <Filters title="Categories" tags={["Unique Tours", "Gaming", "Adventure" ,"Food and Drinks", "Nightlife", "Tourist Attractions","Antiques, Heritage, Museums"]}/>
                        </div>

                        <div>
                            <Filters title="More Filters" tags={["Online Streming", "Kids Allowed", "Outdoor Events", "Challenges"]}/>
                        </div>

                        <div>
                            <Filters title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]}/>
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

export default Activities;
