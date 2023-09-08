import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUserInfo } from '../../store/userInfo'
import PrincipalLayout from '../Layout/PrincipalLayout'

const PrivateRoutes = () => {
    const user = useUserInfo((state) => state.user)
    if (user.token) return <PrincipalLayout> <Outlet /> </PrincipalLayout>
    return <Navigate to={"/auth/login"} />
}

export default PrivateRoutes