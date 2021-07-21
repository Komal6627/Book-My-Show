import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Pages

import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.pages";
import Plays from "./pages/Plays.page";
import Sports from "./pages/Sports.pages";
import Activities from "./pages/Activities.pages";
import Events from "./pages/Events.pages";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays} />
      <DefaultHOC path="/sports" exact component={Sports} />
      <DefaultHOC path="/activities" exact component={Activities} />
      <DefaultHOC path="/events" exact component={Events} />

    </>
  );
}

export default App;
