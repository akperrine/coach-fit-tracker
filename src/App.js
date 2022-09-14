import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/home/home";
import EditProgram from "./routes/edit-program/edit-program";
import Navigation from "./routes/navigation/navigation";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/edit" element={<EditProgram />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
