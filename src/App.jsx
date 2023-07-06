import React, { useState, useContext } from "react";
import './App.css';
import {Header, LightButton, Intro, AboutMe, ProgrammingLanguagesImg, Experience, Projects, Contact, Footer} from "./components"

function App() {
  const [modoOscuro, setModoOscuro] = useState(false)

  function oscuro(){
    setModoOscuro(!modoOscuro)
  }

  return (
    <>
      <Header />
      <LightButton />
      <Intro />
      <AboutMe />
      <ProgrammingLanguagesImg />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
