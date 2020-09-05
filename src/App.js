import React from 'react';
import './App.css';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetails from './PostDetails/PostDetails';
import Nodata from './Nodata/Nodata';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/post/:id">
         <PostDetails></PostDetails>
       </Route>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="*">
         <Nodata></Nodata>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
