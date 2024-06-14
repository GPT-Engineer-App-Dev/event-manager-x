import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
