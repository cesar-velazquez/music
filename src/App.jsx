import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Page404 from './pages/Page404'
import Home from './pages/Home'
import ArtistDetail from './pages/ArtistDetail'
import Playlists from './pages/Playlists'
import PlaylistDetail from './pages/PlaylistDetail'
import PlaylistShared from './pages/PlaylistShared'
import TracksDetail from './pages/TracksDetail'
import PrivateRoutes from './components/auth/PrivateRoutes'

function App() {

  return (
    <>
      <Routes>
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />

        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/tracks/:id' element={<TracksDetail />} />
          <Route path='/artists/:id' element={<ArtistDetail />} />
          <Route path='/playlists' element={<Playlists />} />
          <Route path='/playlists/:id' element={<PlaylistDetail />} />
        </Route>

        <Route path='/playlists/public/:id' element={<PlaylistShared />} />

        <Route path='*' element={<Page404 />} />

      </Routes>
    </>
  )
}

export default App
