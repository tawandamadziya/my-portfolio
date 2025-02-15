import Header from "../components/Header";
import {Hero} from '../components/Hero'; 
import Services from "../components/Cards";
import About from "../components/About";
export default function HomePage() {
    return (
        <div>
            <Header />
            <Hero />
            <Services/>
            <About/>

        </div>
    )
}