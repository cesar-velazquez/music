import React from 'react'
import { AddIcon } from '../Icons'

const TrackDetailCard = ({ track }) => {
    console.log(track)
    return (
        <div className='flex justify-between   ' >
            <div className='flex gap-3 sm:gap-4'>
            <div className=' w-[50px] aspect-square rounded-lg overflow-hidden'>
                <img className=' object-cover' src={track?.album.images[0].url} alt="Album" />
            </div>
            <div className='' >
                <h2 className=''>{track?.name}</h2>
                <h4 className='text-slate-400 text-xs'>{track?.artists[0].name}</h4>
            </div>
            </div>
            <div className=''>
                <AddIcon/>
            </div>
        </div>
    )
}

export default TrackDetailCard