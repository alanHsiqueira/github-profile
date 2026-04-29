import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repositories/:username" element={<Repositories />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
