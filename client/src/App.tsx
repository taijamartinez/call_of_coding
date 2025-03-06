import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { GameProvider } from "./contexts/gamecontext";

function App() {

  return (
    <GameProvider>
    <div className='container'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
    </GameProvider>
  );
}

export default App
