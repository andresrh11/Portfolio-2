import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Proyectos from "./components/Proyects";
import Stack from "./components/Stack";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Stack />
      <Proyectos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
