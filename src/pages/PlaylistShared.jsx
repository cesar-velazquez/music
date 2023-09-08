import React, { useEffect, useRef, useState } from 'react'
import PublicLayout from '../components/Layout/PublicLayout'
import ContainerMusic from '../components/Layout/ContainerMusic'
import { axiosMusic } from '../Utils/axios.Config'
import { useParams } from 'react-router-dom'
import ListPlaylistDetail from '../components/PlaylistDetail/ListPlaylistDetail'
import { PlusIcon, ShareIcon } from '../shared/Icons'
import EmbedTrack from '../shared/EmbedTrack'

const PlaylistShared = () => {
  const [playlistInfo, setPlaylistInfo] = useState(null)
  const [isShowSideA, setIsShowSideA] = useState(true)
  const [currentTrack, setCurrentTrack] = useState(null)

  const { id } = useParams();
  const formRef = useRef(null)

  const handleCopyUrl = () =>{
    const actualUrl = window.location.href
    navigator.clipboard.writeText(actualUrl)
    .then(() => alert("copiado en el portapapeles.!"))
    console.log(actualUrl)
  }

  useEffect(() => {
    axiosMusic
      .get(`/api/playlists/${id}`)
      .then(({ data }) => setPlaylistInfo(data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (playlistInfo) {
      formRef.current.playlistDetail_title.value = playlistInfo.title
      formRef.current.playlistDetail_to.value = playlistInfo.to
      formRef.current.playlistDetail_message.value = playlistInfo.message
    }
  }, [playlistInfo])
  return (
    <PublicLayout>
      <ContainerMusic>
        <form
          ref={formRef}
          id='formPlayListCart'
          className={`relative w-[238px] mx-auto card ${isShowSideA ? "sideA" : "sideB"}`}>
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
                id='playlistDetail_title'
                disabled
              />
            </div>
            <button
              type='button'
              className='absolute right-14 bottom-4 border-2 rounded-full
          p-[6px] cursor-pointer hover:border-yellow-border transition-colors
          group  '
            >
              <PlusIcon />
            </button>
            <button
            type='button'
            onClick={handleCopyUrl}
              target='_blank'
              className='absolute right-5 bottom-4 border-2 rounded-full
          p-[3px] cursor-pointer hover:border-yellow-border transition-colors
          group  '
            >
              <ShareIcon />
            </button>

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
                id='playlistDetail_to'
                disabled
              />
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
                id='playlistDetail_message'
                disabled
              />
            </div>
          </div>
        </form>
        
        <button onClick={() => setIsShowSideA(!isShowSideA)}
          className='block mx-auto my-4'>
          {isShowSideA ? "Lado B" : "Lado A"}
        </button>
        {currentTrack && <EmbedTrack trackId={currentTrack}/>}
        <ListPlaylistDetail
          tracks={playlistInfo?.tracks ?? []}
          setCurrentTrack={setCurrentTrack}
          showPlayBtn
        />
      </ContainerMusic>
    </PublicLayout>
  )
}

export default PlaylistShared