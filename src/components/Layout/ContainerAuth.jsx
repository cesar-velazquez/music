const ContainerAuth = ({ children }) => {
    return (
        <main
            className='font-urbanist min-h-screen bg-purple-bg text-white grid 
            justify-stretch justify-items-center items-center bg-[url(/imgs/bgdesktop.png)]
            bg-right-bottom bg-no-repeat p-4 gap-12 sm:grid-cols-[auto_auto] 
            sm:justify-center sm:bg-[url(/imgs/bgdesktop.png)] '>
            {children}
        </main>

    )
}

export default ContainerAuth