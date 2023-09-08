import React, { useEffect, useState } from 'react'
import ContainerMusic from '../components/Layout/ContainerMusic'
import { SearchIcon } from '../shared/Icons'
import ListPlaylists from '../components/Playlists/ListPlaylists'
import { axiosMusic } from '../Utils/axios.Config'

const Playlists = () => {
  const [playlists, setPlaylists] = useState([])
  useEffect(()=> {
    axiosMusic    
      .get("/api/playlists/me")
      .then(({data}) => setPlaylists(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <ContainerMusic>
      <header className='text-lg'>
        <form className='bg-purple-dark h-[50px] p-2 rounded-md flex 
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
      <ListPlaylists playlists={playlists} />
    </ContainerMusic>
  )
}

export default Playlists