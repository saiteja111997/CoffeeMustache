import { Navbar } from "./components/navbar";
import { Features } from "./components/features";

function App() {
  return (
    <div className="home-container">
      <div className="container pt-14 mx-auto">
        <Navbar />
        <Features />
      </div>
    </div>
  );
}

export default App;
