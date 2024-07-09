import React from "react";
import Top from "./components/Top";
import Mainsettings from "./components/Mainsettings";
function App() {
  return (
    <div className="w-full md:py-4 bg-zinc-800 md:bg-black md:flex md:items-center md:justify-center">
      <div className=" md:w-2/5 md:bg-white">
      <Top />
      <Mainsettings />
      </div>
    </div>
  );
}

export default App;
