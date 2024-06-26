import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import PageNotFound from "./components/PageNotFound";
import Services from "./routes/Services";
import Header from "./components/Header";
import CopyRight from "./components/CopyRight";
import ContactPage from "./routes/ContactPage";
import AboutPage from "./routes/AboutPage";
import CareerPage from "./routes/CareerPage";
import ContactResult from "./components/ContactResult";
import CareerResult from "./components/CareerResult";



function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/career" element={<CareerPage/>}/>
      <Route path="/contact-result" element={<ContactResult/>}/>
      <Route path="/career-result" element={<CareerResult/>}/>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <hr className="mx-3 border-2 border-dark opacity-25"/>
    <CopyRight />
    </>
  );
}

export default App;
