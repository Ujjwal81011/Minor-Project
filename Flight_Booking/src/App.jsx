import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import About from "./Components/About";
import Plans from "./Components/Plans";
import Blog from "./Components/Blog";
import SignIn from "./Components/SignIn";
import Book from "./Components/Book";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Contact from "./Components/Contactus";

function Text() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="plans">
        <Plans />
      </section>
      <Banner />
      <section id="blogs">
        <Blog />
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Topbar />
      <Routes>
        <Route path="/" element={<Text />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
