import React from 'react'
import TrackDetailCard from './TrackDetailCard'

const ListRelatedSongs = ({ tracks }) => {
    return (
        <section className='pt-4 flex flex-col gap-3'>
            {
                tracks?.map((track) => <TrackDetailCard key={track.id} track={track} />)
            }
        </section>
    )
}

export default ListRelatedSongs