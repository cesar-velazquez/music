import React, { useEffect, useState } from 'react'
import ContainerMusic from '../components/Layout/ContainerMusic'
import { Link, useParams } from 'react-router-dom'
import { axiosMusic } from '../Utils/axios.Config'
import ListRelatedSongs from '../shared/TracksDetail/ListRelatedSongs'

const TracksDetail = () => {
  const [tracks, setTracks] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    axiosMusic
      .get(`/api/tracks/${id}`)
      .then(({ data }) => setTracks(data))
      .catch((err) => console.log(err))
  }, [id])


  return (
    <ContainerMusic>
      <Link className='mb-4 block hover:text-yellow-border
      transition-colors duration-500'
        to={-1}>{"<"} Atras </Link>
      <header className='grid gap-4 sm:grid-cols-2 sm:items-center '>
        <div className='rounded-xl overflow-hidden sm:rounded-full
        sm:w-full sm:aspect-square '>
          <img className='w-full h-full object-cover' src={tracks?.album.images[1].url} alt="Album" />
        </div>
        <section className='sm:grid sm:gap-2 '>
          <h2 className='text-xl font-semibold '>{tracks?.name}</h2>
          <ul className='sm:grid sm:gap-3'>
            <li className='font-light '><span className='font-semibold '></span>{tracks?.artists[0].name}</li>
            <li className='font-light '><span className='font-semibold '>Fecha de Lanzamiento </span>{tracks?.album.release_date}</li>
          </ul>
        </section>
      </header>
      <section className='mt-4' >
        <h3 className='text-xl font-semibold '>Recomendaciones</h3>
        <ListRelatedSongs tracks={tracks?.relatedSongs ?? []} />
      </section>

      <section>

      </section>
    </ContainerMusic>
  )
}

export default TracksDetail