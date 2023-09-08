import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserInfo } from '../../store/userInfo'
import { LogOutIcon, MinimalPlayIcon, PlaylistIcon } from '../../shared/Icons'
import PopUpPlaylist from '../Playlist/PopUpPlaylist'
import { usePlaylistCart } from '../../store/playlistCart'


const PrincipalLayout = ({ children }) => {
    const tracks = usePlaylistCart(store => store.tracks)

    const logout = useUserInfo(state => state.logout)
    const [isShowCurrentPlaylist, setIsShowCurrentPlaylist] = useState(false)
    const [isShowAuthOptions, setIsShowAuthOptions] = useState(false)
    // const logout = useUserInfo((state) => state.logout)


    return (
        <section className='min-h-screen font-urbanist bg-purple-bg text-white
        bg-[url(/imgs/bgmobile.png)] bg-right-bottom bg-no-repeat bg-cover
        sm:bg-[url(/imgs/bgdesktop.png)] overflow-hidden
        '>
            <header className='p-2 flex justify-between items-center bg-purple-dark
            sm:text-lg relative '>
                <Link to={"/"} className='uppercase font-semibold'>Gift Music</Link>
                <section className='flex gap-2 px-4 [&>button]:uppercase [&>button]:border-[1px]
                [&>button]:py-1 border-yellow-border [&>button]:px-2 [&>button]:text-sm 
                [&>button]:rounded-full            
            '>
                    <button onClick={() => setIsShowAuthOptions(!isShowAuthOptions)}
                        className='hover:bg-purple-light' >Mi cuenta</button>
                    <button
                    onClick={()=> setIsShowCurrentPlaylist(!isShowCurrentPlaylist)}
                        className='flex gap-3 sm:gap-2 items-center hover:bg-purple-light ' >
                        {/* <img src="/svgs/playlisticon.svg" alt="" /> MANERA UNO */}
                        {/* //MANERA 2 LO MANDA A LLAMAR POR MEDIO DE UN COMPONENTE */}
                        <PlaylistIcon />
                        <span className='hidden sm:inline' >Grabando</span>
                        {tracks.length}
                    </button>
                </section>

                <article className={`absolute -bottom-4 translate-y-full  
                grid bg-purple-light p-4 rounded-lg border border-yellow-border
                uppercase font-semibold transition-[right] duration-500
                ${isShowAuthOptions ? "right-4" : "-right-full"}`} >
                    <Link to={"/Playlists"}
                        className='flex gap-2 items-center group hover:text-yellow-border group ' >
                        <MinimalPlayIcon />
                        Mis Grabaciones</Link>
                    <button
                        onClick={logout}
                        className='flex gap-2 items-center group hover:text-yellow-border
                    ' ><LogOutIcon />
                        Cerrar Sesión

                    </button>
                </article>
                {/* cassete */}
                <PopUpPlaylist isShowCurrentPlaylist={isShowCurrentPlaylist} />             
            </header>

            <section className='flex justify-center items-center px-4 pt-10 ' >
                {children}
            </section>
        </section>
    )
}

export default PrincipalLayout