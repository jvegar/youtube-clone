import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      {/*h1>Hello Clever Programmer, let's build a Youtube Clone 🚀</h1>*/}
      {/* Header -> <Header /> */}
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos/>
      </div>


    </div>
  );
}

export default App;
