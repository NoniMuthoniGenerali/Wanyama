
import "./App.css";
import Animals from "./Components/Animals/Animals";
import Books from "./Components/Books/Books";
import Movies from "./Components/Movies/Movies";
import Navbar from "./Components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Animals />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

     
  

