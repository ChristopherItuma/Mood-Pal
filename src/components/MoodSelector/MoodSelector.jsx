import React, { useState } from "react";
import './MoodSelector.css'
import { searchPlaylistsByMood } from "../../services/spotifyService";

const MoodSelector = ({setPlaylists, setHasSearched, setLoading }) => {
  const moods = ["Happy","Sad","Energetic", "Relax", "Workout", "Focus", "Party"];

  const handleMoodChange = async (event) => {
    const mood = event.target.value;
    if (mood) {
      setHasSearched(true);
      setLoading(true); // Start loading
    
      try {
             //fetch data
      const playlists = await searchPlaylistsByMood(mood);
  
      // Remove null or incomplete playlist objects
      const validPlaylists = playlists.filter((playlist) => playlist && playlist.name);
  
      // Remove duplicate playlists by name
      const uniquePlaylists = Array.from(
        new Set(validPlaylists.map((p) => p.name))
      ).map((name) => validPlaylists.find((p) => p.name === name));
  
      setPlaylists(uniquePlaylists);

      } catch (error) {
        console.error("Error fetching playlists:", error);
      }finally {
        setLoading(false); // End loading
      }
     
    }
  };
  
  
  

  return (
    <div className="mood">
      <select className="moodSelector" onChange={handleMoodChange}>
        <option value="">Select Your Mood</option>
        {moods.map((mood) => (
          <option key={mood} value={mood}>
            {mood}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MoodSelector;
