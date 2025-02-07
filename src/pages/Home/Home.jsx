import React from 'react'
import { useState } from 'react'
import './Home.css'
import MoodSelector from '../../components/MoodSelector/MoodSelector'
import PlaylistDisplay from '../../components/PlaylistGrid/PlaylistDisplay'
import Header from '../../components/Header/Header'
import Spinner from '../../components/Spinner/Spinner'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  const [playlists, setPlaylists] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

console.log(loading);

  return (
    <div className='container'>
      <Header />
      <MoodSelector setPlaylists={setPlaylists}
        setHasSearched={setHasSearched}
        setLoading={setLoading}/>
    {loading ? <Spinner /> : <PlaylistDisplay playlists={playlists} hasSearched={hasSearched} />}
    <Footer />
    </div>
  )
}

export default Home