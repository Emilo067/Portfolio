import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Contacts} from "./layout/sections/contact/Contacts";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";
import {GoToTopBtn} from "./components/goToTopBtn/GoToTopBtn";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
            <GoToTopBtn/>
        </div>
    );
}

export default App;
