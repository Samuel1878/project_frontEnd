import { createContext, useEffect, useMemo } from "react"

const Auth = ({children}) => {
    
    return(
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
}
export default Auth;