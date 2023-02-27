import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import { Routes, Route } from "react-router-dom";
import TextArea from './components/TextArea';
function App() {
  return (
    <>
    <Navbar title="Company" aboutText="Abouts Us" />
      <Routes>
          <Route path="/" element={<div className="container"><TextArea heading="Enter text here to check" /></div>}/>;
          <Route path="about" element={<div className="container"><Aboutus /></div>} />;
      </Routes>
      {/* <div className="container">
    <button className="btn btn-primary">Convert to UpperCase</button>
   </div> */}
    </>
  );
}

export default App;