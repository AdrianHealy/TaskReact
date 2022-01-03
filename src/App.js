//import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Loog from "./components/Loog";
import Navbar from "./components/Navbar";

function App() {
  let arr = ["Клубника", "Бананы", "Киви"];
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
      <Loog data={arr} />
    </div>
  );
}

export default App;
