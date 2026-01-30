import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoticesPage from "./pages/NoticesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notices" element={<NoticesPage />} />
    </Routes>
  );
}

export default App;
