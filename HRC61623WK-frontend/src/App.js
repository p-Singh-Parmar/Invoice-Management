import "./App.css";
import Header from "./components/Dashboard/Header/Header";

import Footer from "./components/footer/Footer";
import Functionalities from "./components/Navbar/functionalities";

function App() {
  return (
    <div className="App">
      <Header />
      <Functionalities />

      <Footer />
    </div>
  );
}

export default App;
