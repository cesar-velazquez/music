import React from 'react'
import TrackByPlaylistDetail from './TrackByPlaylistDetail'

const ListPlaylistDetail = ({ tracks, handleDelete, showPlayBtn, showDeletebtn, setCurrentTrack }) => {
    return (
        <section className='grid gap-2' >
            {
                tracks.map((track) => <TrackByPlaylistDetail key={track.id} track={track} handleDelete={handleDelete} showPlayBtn={showPlayBtn} showDeletebtn={showDeletebtn} setCurrentTrack={setCurrentTrack} />)
            }
        </section>
    )
}

export default ListPlaylistDetail