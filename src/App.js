import "./App.css";
import Home from "./components/home/Home";
import Cards from "./components/cards/Cards";
import Infinite from "./components/infinite/Infinite";
import Testimonial from "./components/testimonial/Testimonial";
import Panel from "./components/panel/Panel";
import Cardswipe from "./components/cards-swipe/Cards-swipe";
import Stories from "./components/stories/Stories";
import Blog from "./components/blog/Blog";
import Comment from "./components/comment/Comment";
import Product from "./components/product/Product";
import Social from "./components/social/Social";
import Contact from "./components/contact/Contact";
import Champion from "./components/champions/Champion.jsx";
import Quiz from "./components/quiz/Quiz.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <div class="green-blurred-div"></div>
      <div class="green-blurred-div-right"></div>
      <Header />
      <Cards />
      <Testimonial />
      <Panel />
      <Champion />
      <Quiz />
      <Cardswipe />
      <Stories />
      <Blog />
      <Comment />
      <Social />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
