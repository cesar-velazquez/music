import React, { useEffect, useState } from 'react'
import ContainerMusic from '../components/Layout/ContainerMusic'
import { axiosMusic } from '../Utils/axios.Config'
import { SearchIcon } from '../shared/Icons'
import ListTracksDefault from '../shared/ListTracksDefault'

const Home = () => {
  const [searchResults, setSearchResults] = useState([])
  const [tracksRecomendations, setTracksRecomendations] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target["home-querySearch"].value
    if (query=== "") return setSearchResults([])
    axiosMusic
      .get(`/api/tracks?limit=10&q=${query}`)
      .then(({ data }) => setSearchResults(data.tracks.items))
      .catch((err) => console.log(err))
  }
  const tracksToShow = searchResults.length === 0 ?
    tracksRecomendations
    :
    searchResults;

  useEffect(() => {
    axiosMusic
      .get("/api/tracks/recommendations?seed_genres=rock-n-roll,reggaeton")
      .then(({ data }) => setTracksRecomendations(data.tracks))
      .catch((err) => console.log(err))
  }, [])

  return (
    <ContainerMusic>
      <header className='text-lg'>
        <form onSubmit={handleSubmit} className='bg-purple-dark h-[50px] p-2 rounded-md flex 
        gap-2 items-center '>
          <button><SearchIcon /></button>
          <input          
            id='home-querySearch'
            size={10}
            className='text-center bg-transparent flex-1 outline-none'
            type="text" placeholder='buscar' />
          <select
            className='bg-transparent outline-none'
          >
            <option value="10">10</option>
          </select>
        </form>
      </header>
      <ListTracksDefault tracks={tracksToShow} />
    </ContainerMusic>
  )
}

export default Home