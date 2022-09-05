import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage, ErrorPage } from "./routes";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
