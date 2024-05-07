import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Row1 from "./components/Row1";
import OurServices from "./components/OurServices";
import Partnerships from "./components/Partnerships";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <>
     <Header/>
     <Hero/>
     <Row1/>
     <OurServices/>
     <Partnerships/>
     <BookingForm/>
    </>
  );
}

export default App;
