import "./App.css";
import Home from "./components/home/Home";
import Cards from "./components/cards/Cards";
import Infinite from "./components/infinite/Infinite";
import Testimonial from "./components/testimonial/Testimonial";
import Panel from "./components/panel/Panel";
import Cardswipe from "./components/cards-swipe/Cards-swipe";
import Stories from "./components/stories/Stories";
import Blog from "./components/blog/Blog";

function App() {
  return (
    <div className="App">
      <Home />
      <Cards />
      <Infinite />
      <Testimonial />
      <Panel />
      <Cardswipe />
      <Stories />
      <Blog />
    </div>
  );
}

export default App;
