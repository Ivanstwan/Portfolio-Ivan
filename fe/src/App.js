import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import Contact from "./pages/Contact";
import Artworks from "./pages/Artworks";
import Design from "./pages/Design";
import ColorPalete from "./ColorPalete";
import Footer from "./component/Footer";
import ScrollToTop from "./ScrollToTop";
import Resume from "./component/Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className="position-up">
          <Navbar />
        </div>
        <Switch>
          {/* <Route path="/about" component={About} /> */}
          <Route path="/artworks" component={Artworks} />
          {/* <Route path="/design" component={Design} /> */}
          {/* <Route path="/about" component={About} /> */}
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />

          {/* <Route path="/colorpalate" component={ColorPalete} /> */}
          <Route path="/" component={Home} exact />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
