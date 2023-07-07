import './App.css';
import {ThemeProvider, Header, LightButton, Intro, AboutMe, ProgrammingLanguagesImg, Experience, Projects, Contact, Footer} from "./components"

function App() {
  return (
    <ThemeProvider>
      <Header />
      <LightButton />
      <Intro />
      <AboutMe />
      <ProgrammingLanguagesImg />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
