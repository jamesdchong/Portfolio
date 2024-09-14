import { useContext } from 'react';
import { Navbar, Hero, About, Tech, Projects } from './components';
import { context } from './App';

const MainSite = () => {
    const { isLight } = useContext(context);

    return (
        <div className={`${isLight ? "bg-white selection:text-white selection:bg-[#2B3467]" : "bg-black selection:text-black-200 selection:bg-[#E78EA9]"}`}>
            <Navbar />
            <Hero />
            <About />
            <Tech />
            <Projects />
        </div>
    )
}

export default MainSite;