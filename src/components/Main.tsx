import About from "./about/About";
import Education from "./education/Education";
import Footer from "./footer/Footer";
import Home from './home/Home'
import Navbar from "./navbar/NavBar";
import Projects from "./Projects";



const Main = () => {


    return (
        <main>
            <Navbar />
            <Home text={['Front-End Developer', 'Aspiring Full-Stack Engineer']} speed={50} delay={3000}  />
            <Education />
            <Projects />
            <About />
            <Footer />
        </main>
        
    )
}
export default Main;