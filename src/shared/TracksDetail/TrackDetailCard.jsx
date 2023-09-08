import React from 'react'
import { AddIcon } from '../Icons'
import { usePlaylistCart } from '../../store/playlistCart'
import { Link } from 'react-router-dom'

const TrackDetailCard = ({ track }) => {
    const addTrack = usePlaylistCart(store => store.addTrack)

    return (
        <div className='flex justify-between   ' >
            <div className='flex gap-3 sm:gap-4'>
                <div className=' w-[50px] aspect-square rounded-lg overflow-hidden'>
                    <img className=' object-cover' src={track?.album.images[0].url} alt="Album" />
                </div>

                <section className='flex-1 text-sm sm:text-base'>
                    <Link to={`/tracks/${track.id}`} className='font-semibold line-clamp-1' >{track.name}</Link>
                    <Link to={`/artists/${track.artists[0].id}`} className='text-slate-400 font-light line-clamp-1' >{track.artists[0].name}</Link>
                </section>
                
            </div>
            <div className=''>
                <button onClick={() => addTrack(track)} className='group'>
                    <AddIcon />
                </button>
            </div>
        </div>
    )
}

export default TrackDetailCard