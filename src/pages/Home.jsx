import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";
import ErrorBoundary from "../components/common/ErrorBoundary";

// Chaque section est isolée : une erreur dans l'une n'efface plus toute la page.
const Home = () => {
    return (
        <>
            <ErrorBoundary name="Hero"><Hero /></ErrorBoundary>
            <ErrorBoundary name="About"><About /></ErrorBoundary>
            <ErrorBoundary name="Skills"><Skills /></ErrorBoundary>
            <ErrorBoundary name="Projects"><Projects /></ErrorBoundary>
            <ErrorBoundary name="Services"><Services /></ErrorBoundary>
            <ErrorBoundary name="Contact"><Contact /></ErrorBoundary>
        </>
    );
};

export default Home;
