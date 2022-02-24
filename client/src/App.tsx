import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Upload, Download, FileLink } from "./components";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/download" element={<Download />} />
          <Route path="/:code" element={<FileLink />} />
        </Routes>
      </Router>
      <div className="body">
        <Home />
      </div>
    </div>
  );
}

export default App;
