import { create } from "zustand";
import { persist } from "zustand/middleware"

const INITIALSTATE = {
    email: "",
    name: "",
    token: ""
}

export const useUserInfo = create (persist(
    (set)=> ({
        user: INITIALSTATE,    
        login: (infoLogin) => {
            set({user:infoLogin})
        },
        logout: () => {
            set({user: INITIALSTATE})
            localStorage.removeItem("userInfo")
        }
    }),
    {
        name: "userInfo"
    }
))