import React from 'react'
import { Link } from 'react-router-dom'

const PublicLayout = ({children}) => {
    return (
        <section className='min-h-screen font-urbanist bg-purple-bg text-white
        bg-[url(/imgs/bgmobile.png)] bg-right-bottom bg-no-repeat bg-cover
        sm:bg-[url(/imgs/bgdesktop.png)] overflow-hidden
        '>
            <header className='p-2 py-3 flex justify-center items-center bg-purple-dark
            sm:text-lg relative '>
                <Link to={"/"} >
                    <h1 className='uppercase font-semibold'>Gift Music</h1>
                </Link>
            </header>

            <section className='flex justify-center items-center px-4 pt-10 ' >
                {children}
            </section>
        </section>
    )
}

export default PublicLayout