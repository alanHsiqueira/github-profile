import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repositories/:username" element={<Repositories />} />
        </Routes>
      </HashRouter>
    </UserProvider>
  );
}

export default App;
