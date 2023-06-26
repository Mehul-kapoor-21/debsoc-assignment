import Home from "./Pages/Home/Home";
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Quiz from "./Pages/Quiz/Quiz";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
