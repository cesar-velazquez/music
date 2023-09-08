import React, { useEffect, useState } from 'react'
import ContainerMusic from '../components/Layout/ContainerMusic'
import { Link, useParams } from 'react-router-dom'
import { axiosMusic } from '../Utils/axios.Config'
import SlideAlbums from '../shared/SlideAlbums'
import ListTracksDefault from '../shared/ListTracksDefault'

const ArtistDetail = () => {
  const [artist, setArtist] = useState(null)
  const {id} = useParams()

  

  useEffect(()=>{
    axiosMusic
      .get(`/api/artists/${id}`)
      .then(({data}) => setArtist(data))
      .catch((err) => console.log(err))
  },[id])
  return (
    <ContainerMusic>
      <Link className='mb-4 block hover:text-yellow-border
      transition-colors duration-500'
      to={-1}>{"<"} Atras </Link>
      <header className='grid gap-4 sm:grid-cols-2 sm:items-center '>
        <div className='rounded-xl overflow-hidden sm:rounded-full
        sm:w-full sm:aspect-square '>
          <img className='w-full h-full object-cover' src={artist?.images[1].url} alt="Artista" />
        </div>
        <section>
          <h2 className='text-xl font-semibold line-clamp-1'>{artist?.name}</h2>
          <ul>
            <li className='font-light '><span className='font-semibold '>seguidores</span>{artist?.followers.total}</li>
            <li className='font-light '><span className='font-semibold '>popularidad</span>{artist?.popularity}</li>            
          </ul>
          <section>
            <h4 className='font-semibold'>Generos</h4>
            <ul className='flex gap-2 flex-wrap mt-2 '>
            {
            artist?.genres.slice(0, 4).map((genre)=> 
            <li 
            className='border border-purple-500 p-1 px-2
            rounded-full'
            key={genre} >{genre} </li> )
            }
            </ul>
          </section>
        </section>
      </header>
      <section className='mt-4  '>
        <h3 className='text-xl font-semibold' >Otros discos</h3>  
        <SlideAlbums albums={artist?.albums ?? []}/>      
      </section>
      <section className='mt-4' >
        <h3 className='text-xl font-semibold '>Las más sonadas</h3>
        <ListTracksDefault tracks={artist?.songsTop ?? []} />
      </section>

      <section>

      </section>
    </ContainerMusic>
  )
}

export default ArtistDetail