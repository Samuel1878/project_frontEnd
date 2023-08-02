import Navigations from "./index"
import AuthProvider from "./src/services/AuthUser"

export default function App() {
    return(
       <AuthProvider>
          <Navigations/>
       </AuthProvider>
    )
}

