import React from 'react'
import { EditIcon } from '../../shared/Icons'
import { Link } from 'react-router-dom'

const PlaylistCard = ({ playlist, index }) => {
    const topDistance = index * 50

    return (
        <Link to={`/playlists/${playlist.id}`} className='absolute front transition-transform 
        hover:rotate-2 hover:-translate-y-4 cursor-pointer' style={{top: `${topDistance}px`}} >
            <img className='mx-auto' src="/imgs/cassette.png" alt="Playlist" />
            <div className='flex items-center gap-2 bg-white
                    absolute top-4 left-[20px] rounded-md px-2 w-[198px] '>
                <h3 className='text-black flex-1 line-clamp-1 '>{playlist.title}</h3>
                <EditIcon />
            </div>
        </Link>
    )
}

export default PlaylistCard