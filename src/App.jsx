import Home from "./components/Home"
import React from "react";
import Editor from './components/Editor';
import {BrowserRouter as Router , Route , Link, Routes} from "react-router-dom";

function App() {

  return (
    <div>
    <Router>
      {/* <Link to ="">Home</Link>
      <Link to ="/editor">Editor</Link> */}
      <Routes>
      <Route exact path ="/" element = {<Home />} />
      <Route path ="/editor/:id" element = {<Editor />} />
      </Routes>
    </Router>
    </div>
    
  )
}

export default App
