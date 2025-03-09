import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import BusRoute from "./pages/BusRoute";

function App({ setSelectedTheme }) {
  return (
    <Routes>
      <Route path="/" element={<Main setSelectedTheme={setSelectedTheme} />} />
      <Route
        path="/bus-route"
        element={<BusRoute setSelectedTheme={setSelectedTheme} />}
      />
    </Routes>
  );
}

export default App;
