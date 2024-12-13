import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import "./styles.css";
import "./utils.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}
