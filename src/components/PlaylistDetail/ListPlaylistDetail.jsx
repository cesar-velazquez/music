import React from 'react'
import TrackByPlaylistDetail from './TrackByPlaylistDetail'

const ListPlaylistDetail = ({ tracks, handleDelete }) => {
    return (
        <section className='grid gap-2' >
            {
                tracks.map((track) => <TrackByPlaylistDetail key={track.id} track={track} handleDelete={handleDelete} />)
            }
        </section>
    )
}

export default ListPlaylistDetail