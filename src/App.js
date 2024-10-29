import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/hoseo-bus-app" element={<Main />} />
    </Routes>
  );
}

export default App;
