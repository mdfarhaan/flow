import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Upload, Download, FileLink } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/download" element={<Download />} />
          <Route path="/:code" element={<FileLink />} />
          <Route element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
