import { Navbar } from "./components/navbar";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { BookDemo } from "./components/book-demo";
import { FutureCafes } from "./components/future-cafes";
import HeroSection from "./components/hero-section";
function App() {
  return (
    <div className="home-container">
      <div className="container pt-14 mx-auto">
        <Navbar />
        <HeroSection />
        <Features />
        <FutureCafes />
        <BookDemo />
        <div className="flex justify-center items-center pt-16 pb-12">
          <img src="/logo.svg" alt="" className="w-64 md:w-96 h-full" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
