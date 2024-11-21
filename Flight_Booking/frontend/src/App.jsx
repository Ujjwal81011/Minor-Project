import React from "react";
import { Routes, Route } from "react-router-dom";
import { About,Banner,Blog,Contact,Features,Footer,Home,Navbar,Plans,Signin,Topbar,Book,Hotel,Extra,Support,Register} from "./Components/index.js";

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
      <section id="Extra">
        <Extra />
      </section>
      <section id="banner">
        <Banner />
      </section>
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
        <Route path="/signin" element={<Signin />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
