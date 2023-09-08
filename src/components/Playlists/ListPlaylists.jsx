import React from 'react'
import PlaylistCard from './PlaylistCard'

const ListPlaylists = ({ playlists }) => {
    const quantityCassettes = playlists.length
    const HEIGHT_CASSETTE = 180    
    const DISTANCE_DIFFERENT = 50
    const heigthContainer = ((quantityCassettes - 1) * DISTANCE_DIFFERENT) + HEIGHT_CASSETTE  
    return (
        <section className='w-[238px] mx-auto mt-10 relative ' style={{height:
        `${heigthContainer}px`}}>
            {
                playlists.map((playlist, index) => <PlaylistCard key={playlist.id} playlist={playlist} index={index} />)
            }
        </section>
    )
}

export default ListPlaylists