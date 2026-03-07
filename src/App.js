import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Daybook from "./pages/Daybook1";
import "./styles/layout.css";

function App() {
  return (
    <Router>
      <div className="layout">

        <Sidebar />

        <div className="main">

          <Header />

          <div className="content">

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Daybook" element={<Daybook1 />} />
            </Routes>

          </div>

        </div>

      </div>
    </Router>
  );
}

export default App;