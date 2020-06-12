import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./utils/auth";
import Member from "./pages/Member";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import News from "./pages/News";
import CoolFacts from "./pages/CoolFacts";
import Discover from "./pages/Discover";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            onFailureRedirectToPath="/login"
          ></ProtectedRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/news" component={News} />
          <Route exact path="/facts" component={CoolFacts} />
        </Wrapper>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
