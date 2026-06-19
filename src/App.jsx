import { Hero, About, TechStack, Projects, Experience, Connect, Footer } from './sections';
import Nav from "./components/Nav";

const App = () => (
    <main className="relative min-h-screen" style={{ paddingTop: '80px' }}>
        <Nav />
        <section id="hero" className="section-pad">
            <Hero />
        </section>
        <section id="about" className="section-pad">
            <About />
        </section>
        <section id="tech" className="section-pad">
            <TechStack />
        </section>
        <section id="projects" className="section-pad">
            <Projects />
        </section>
        <section id="experience" className="section-pad">
            <Experience />
        </section>
        <section id="connect" className="section-pad">
            <Connect />
        </section>
        <section id="footer">
            <Footer />
        </section>
    </main>
);

export default App;