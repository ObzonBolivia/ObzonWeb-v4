import Loader from '../components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context.js'
import { onAuth } from '../firebase/utils'



export function WithAuth(Component) {
    return () => {
        const { user, setUserProfile, setUserData } = useUser()
        const router = useRouter()

        useEffect(() => {
            user === undefined && onAuth(setUserProfile, setUserData)
            if(user === null) router.push('/Login')
        }, [user])
        
        return (
            <>
                {user === undefined && <Loader />}
                {user && <Component {...arguments} />}
            </>
        )
    }
}
