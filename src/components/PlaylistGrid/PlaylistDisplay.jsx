import React, { useState } from "react";
import './PlaylistDisplay.css'

const PlaylistDisplay = ({ playlists, hasSearched }) => {
  if (hasSearched && (!playlists || playlists.length === 0)) {
    return <p>No playlists available. Try another mood.</p>;
  }

  return (
    <div className={playlists.length > 0 ?'playlisit-grid':'guide'}>

      {
        playlists.length > 0?
      
      playlists.map((playlist) => (
        playlist && (
          <div key={playlist.id} className='playlist'>
            <a
              href={playlist.external_urls?.spotify || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={playlist.images?.[0]?.url || "/default-image.jpg"}
                alt={playlist.name || "Playlist Image"}
                width={100}
              />
            </a>
            <a
              href={playlist.external_urls?.spotify || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
            <p className='playlist-name'>{playlist.name.length > 30 ? playlist.name.slice(0,25) + "...": playlist.name}</p>
            </a>
          </div>
        )
      )):<p>⚠ Select Your Mood To View Playlists ⚠</p>
         
    
    }
    </div>
  );
};
export default PlaylistDisplay