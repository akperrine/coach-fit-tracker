import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/home";
import EditProgram from "./routes/edit-program";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit" element={<EditProgram />} />
    </Routes>
  );
}

export default App;
