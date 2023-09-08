import React, { useEffect, useRef, useState } from 'react'
import ContainerMusic from '../components/Layout/ContainerMusic'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { EditIcon, ReturnIcon, SaveIcon, ShareIcon, TrashIcon } from '../shared/Icons'
import { axiosMusic } from '../Utils/axios.Config'
import ListPlaylistDetail from '../components/PlaylistDetail/ListPlaylistDetail'

const PlaylistDetail = () => {
  const [playlistInfo, setPlaylistInfo] = useState(null)
  const [isShowSideA, setIsShowSideA] = useState(true)
  const { id } = useParams();
  const formRef = useRef(null)
  const navigate = useNavigate()

  const handleDeletePlaylist = () => {
    axiosMusic    
      .delete(`/api/playlists/${id}`)
      .then(({data}) => {
        navigate("/playlists")
      })
      .catch((err) => console.log(err))
  }

  const handleDelete = (idTrackToDelete) => {
    axiosMusic
      .delete(`/api/playlists/${playlistInfo.id}/tracks/${idTrackToDelete}`)
      .then(() => {
        const newTracks = playlistInfo.tracks.filter(track => track.id !== idTrackToDelete)
        setPlaylistInfo({...playlistInfo, tracks: newTracks})
      })
      .catch((err) => console.log(err))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))    
    axiosMusic    
      .patch(`/api/playlists/${id}`, data)
      .then(({data}) => alert("succesfully"))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    axiosMusic
      .get(`/api/playlists/${id}`)
      .then(({ data }) => setPlaylistInfo(data))
      .catch((err) => console.log(err))
  }, [])
  useEffect(()=>{
    if(playlistInfo){
      formRef.current.playlistDetail_title.value = playlistInfo.title
      formRef.current.playlistDetail_to.value = playlistInfo.to
      formRef.current.playlistDetail_message.value = playlistInfo.message
    }
  },[playlistInfo])
  return (
    <ContainerMusic>
      <Link to={-1} >{"<"} Atras</Link>
      <form
      ref={formRef}
        onSubmit={handleSubmit}
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
              onFocus={() => setIsShowSideA(true)}
            />
            <label><EditIcon /></label>
          </div>
          <Link
          to={`/playlists/public/${id}`}
          target='_blank'
          className='absolute right-5 bottom-4 border-2 rounded-full
          p-[3px] cursor-pointer hover:border-yellow-border transition-colors
          group  '
          >
            <ShareIcon/>
          </Link>
          <button  
          type='submit'                  
          className='absolute left-5 bottom-4 border-2 rounded-full
          p-[3px] cursor-pointer hover:border-yellow-border transition-colors
          group  '
          >
            <SaveIcon/>
          </button>
          <button     
          type='button' 
          onClick={handleDeletePlaylist}              
          className='absolute left-16 bottom-4 border-2 rounded-full
          p-[3px] cursor-pointer hover:border-yellow-border transition-colors
          group  '
          >
            <TrashIcon/>
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
              onFocus={() => setIsShowSideA(false)}
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
              id='playlistDetail_message'
              onFocus={() => setIsShowSideA(false)}
            />
          </div>
        </div>
      </form>
      <button onClick={() => setIsShowSideA(!isShowSideA)}
        className='flex gap-2 mx-auto my-4 group font-semibold
        bg-purple-400 px-2 py-1 rounded-3xl border border-yellow-border
        hover:bg-black '>
        {isShowSideA ? `Lado B ` : "Lado A"}
        <ReturnIcon />
      </button>
      <ListPlaylistDetail
        tracks={playlistInfo?.tracks ?? []}
        handleDelete={handleDelete}
        showDeletebtn
      />
    </ContainerMusic>
  )
}

export default PlaylistDetail