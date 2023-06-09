import "./App.css";
import { Nav, Header, About, Services, Projects, Contact, Footer } from "./components";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Header />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
