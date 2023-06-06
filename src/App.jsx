import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
