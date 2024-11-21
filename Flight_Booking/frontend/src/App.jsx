import React from "react";
import { Routes, Route } from "react-router-dom";
import { About,Banner,Blog,Contact,Features,Footer,Home,Navbar,Plans,Signin,Topbar,Book,Hotel,Extra,Support,Login} from "./Components/index.js";

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
        <Route path="/Text" element={<Text />} />
        <Route path="/" element={<Signin />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
