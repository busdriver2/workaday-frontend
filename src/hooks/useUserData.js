import { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import config from '../config'

const useUserData = () => {
    const { user } = useAuthContext(); // Assumes your auth context provides the authenticated user
    const [userData, setUserData] = useState(null)
    const apiUrl = config.API_URL

    const fetchUserData = async () => {
        if (user) {
            //Use email, since user object here only has token and email
            const response = await fetch(`${apiUrl}/api/user/${user.email}`)
            const json = await response.json()
            if (response.ok) {
                setUserData(json);
            }
            
        }
        
    }
    
    return {fetchUserData, userData}
};

export default useUserData
