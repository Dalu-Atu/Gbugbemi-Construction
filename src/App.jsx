import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage"; // <-- your admin page

function App() {
  return (
    <Router>
      <Analytics />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
