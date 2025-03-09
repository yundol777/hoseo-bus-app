import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import BusRoute from "./pages/BusRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/bus-route" element={<BusRoute />} />
    </Routes>
  );
}

export default App;
