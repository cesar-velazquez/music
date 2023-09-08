import React, { useState } from 'react'
import { EditIcon } from '../../shared/Icons'
import './PopUpPlaylist.css'
import ListCartPlaylist from './ListCartPlaylist'
import { usePlaylistCart } from '../../store/playlistCart'
import { axiosMusic } from '../../Utils/axios.Config'

const PopUpPlaylist = ({ isShowCurrentPlaylist }) => {
    const [isShowSideA, setIsShowSideA] = useState(true)
    const tracks = usePlaylistCart(store => store.tracks)
    const cleantracks = usePlaylistCart(store => store.cleanTracks)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        data.tracks = tracks        
        axiosMusic
            .post("/api/playlists", data)
            .then(() => {
                e.target.reset();
                cleantracks()
            })
            .catch((err) => console.log(err))
    }

    return (
        <article className={`absolute w-[272px] z-10 -bottom-4 translate-y-full  
        grid bg-purple-light p-4 rounded-lg border border-yellow-border
        uppercase font-semibold transition-[right] duration-500 right-4 
        ${isShowCurrentPlaylist == true ?
                "right-4"
                :
                "right-full"
            }
            `} >
            <form
                onSubmit={handleSubmit}
                id='formPlayListCart'
                className={`relative card ${isShowSideA ? "sideA" : "sideB"}`}>
                {/* lado a */}
                <div className='relative front' >
                    <img className='mx-auto' src="/imgs/cassette.png" alt="Playlist" />
                    <div className='flex items-center gap-2 bg-white
                    absolute top-4 left-3 rounded-md px-2 w-[205px] '>
                        <input
                            className='text-black text-center bg-transparent outline-none p-1 
                        text-sm flex-1'
                            type="text"
                            placeholder='Título'
                            size={10}
                            name='title'
                            required
                            onFocus={()=> setIsShowSideA(true) }
                        />
                        <label><EditIcon /></label>
                    </div>
                </div>

                {/* lado b  */}
                <div className='absolute top-0 left-[3px] back ' >
                    <img className='mx-auto' src="/imgs/cassette.png" alt="" />
                    <div className='flex items-center gap-2 bg-white
                    absolute top-4 left-3 rounded-md px-2 w-[205px] '>
                        <input
                            className='text-black bg-transparent outline-none p-1 
                        text-sm flex-1'
                            type="text"
                            placeholder='Para:'
                            size={10}
                            name='to'
                            required
                            onFocus={()=> setIsShowSideA(false) }
                        />
                        <label><EditIcon /></label>
                    </div>
                    <div className='flex items-center gap-2 bg-white
                    absolute top-12 left-3 rounded-md px-2 w-[205px] '>
                        <textarea
                            className='text-black text-center bg-transparent 
                            outline-none p-1 text-sm flex-1 resize-none'
                            type="text"
                            placeholder='Dedicatoria'
                            rows={4}
                            size={10}                            
                            name='message'
                            required
                            onFocus={()=> setIsShowSideA(false) }
                        />
                    </div>
                </div>
            </form>
            <button onClick={() => setIsShowSideA(!isShowSideA)} className=''>
                {isShowSideA ? "Lado B" : "Lado A"}
            </button>
            <ListCartPlaylist tracks={tracks} />
            <button form='formPlayListCart'>Crear</button>
        </article>
    )
}

export default PopUpPlaylist