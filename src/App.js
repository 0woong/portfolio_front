import "./App.css";
import { Nav, Header, About, Services, Portfolio, Contact, Footer } from "./components";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
