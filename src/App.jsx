import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { HeroBanner } from "./components/HeroBanner.jsx";
import { PopularCourses } from "./components/PopularCourses.jsx";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <main>
        <PopularCourses />
      </main>
      <Footer />
    </>
  );
}

export default App;
