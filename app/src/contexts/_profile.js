import { createContext, useContext, useEffect, useState } from 'react'
import { getProfileDetails } from '../api/profileApi';

const ProfileContext = createContext();

export function ProfileProvider({ children, userId }) {

    const [profile, setProfileData] = useState({});

    useEffect(() => {

        getProfileDetails(userId).then(profile => {
            setProfileData({ ...profile, userId: userId })
        })
            .catch(err => console.log(err))


    }, [userId])


    return (
        <ProfileContext.Provider value={{ profile }}>

            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    const context = useContext(ProfileContext)

    return context;
}