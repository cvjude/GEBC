import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Construction from "./views/Construction";
import "./App.css";

const HomePage = lazy(() => import("./views/Homepage"));
const About = lazy(() => import("./views/AboutUs"));
const Ministries = lazy(() => import("./views/Ministries"));
const MemberShip = lazy(() => import("./views/MemberShip"));

function App() {
  return (
    <main className="App">
      <Router>
        <Loader />
        <Suspense fallback={<Loader tempLoad={true} />}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/ministries" component={Ministries} />
            <Route exact path="/membership" component={MemberShip} />
            <Route component={Construction} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </main>
  );
}

export default hot(module)(App);
