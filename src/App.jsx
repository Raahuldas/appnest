import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import Partnerships from "./components/Partnerships";
import BookingForm from "./components/BookingForm";
import { useRef } from "react";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import Ventures from "./components/Ventures";

function App() {
  const services =useRef()
  const contact =useRef()
  return (
    <>
     <Header services={services} contact={contact} />
     <Hero/>
     <OurServices services={services} />
     <Partnerships/>
     <BookingForm contact={contact} />
     {/* <Footer/> */}
     <Ventures/>
     <CopyRight/>
    </>
  );
}

export default App;
