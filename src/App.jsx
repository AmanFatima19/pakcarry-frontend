import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import AppContent from "./AppRoutes";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Router>
        <AppContent />
      <Toaster
  position="top-center"
  reverseOrder={false}
  
/>
      </Router>
    </>
  );
}

export default App;
