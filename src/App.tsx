import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing"
import Aboutus from "./pages/aboutus";
import Contactus from "./pages/contactus";
import Solution from "./pages/solution";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/aboutus" element={<Aboutus/>} />
      <Route path="/contactus" element={<Contactus/>} />
      <Route path="/solution" element={<Solution/>} />
    </Routes>
  );
};

export default App;
