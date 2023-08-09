import Navigations from "./index"
import AuthProvider from "./src/services/auth/AuthUser"
import GameState from "./src/services/game/gameState";
import GlobalState from "./src/services/global/globalState"
import SocketProvider from "./src/services/socket/socketProvider";

export default function App() {
    return (
      <GlobalState>
        <AuthProvider>
         
            <SocketProvider>
               <GameState>
              <Navigations />
               </GameState>
            </SocketProvider>
         
        </AuthProvider>
      </GlobalState>
    );
}

