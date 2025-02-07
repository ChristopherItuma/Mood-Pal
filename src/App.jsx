import React, { useState } from "react";
import MoodSelector from "./components/MoodSelector/MoodSelector";
import PlaylistDisplay from "./components/PlaylistGrid/PlaylistDisplay";
import Home from "./pages/Home/Home";


function App() {
  const [playlists, setPlaylists] = useState([]);

  return (
    <div className="App">
   <Home />
    </div>
  );
}

export default App;
