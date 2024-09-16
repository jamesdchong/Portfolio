import { useContext } from 'react';
import { styles } from '../styles';
import { context } from '../App';
import { comp, linkedin, github, gmail } from '../assets';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    const { isLight } = useContext(context);

    return (
        <div className={`z-0 ${isLight ? "bg-hero-pattern-light" : "bg-hero-pattern-dark"} bg-cover bg-no-repeat bg-center`} >
			<div className={`absolute inset-0 bg-gradient-to-b from-transparent from-60% ${isLight ? "to-white" : "to-black"}`}></div>
			<section className={`relative shrink-0 w-full h-screen mx-auto ${styles.paddingX} pt-[120px] max-w-7xl mx-auto flex items-start justify-between`}>
				<div className='flex flex-col md:flex-row justify-between items-center mt-5 gap-3'>
					<div className='flex flex-col gap-3 md:gap-5'>
						<h1 className={`${styles.heroHeadText} ${isLight ? "text-black-100" : "text-white-100"}`}>Hi, I'm <span className="text-[#2548e3]">James.</span></h1>
						<div className='flex gap-5 md:gap-7 justify-start items-center'>
							<a
								href="src/assets/JamesChongResume.pdf"
								className={`${isLight ? "bg-black-200 text-white-100" : "bg-white-100 text-black-200"} hover:scale-105 text-xs md:text-lg font-semibold p-3 rounded-xl`}
								target="_blank"
								rel="noopener noreferrer"
							>
								My Resume
							</a>
							<a href='https://www.linkedin.com/in/jamesdchong/' target='__blank'><img src={linkedin} alt="linkedin" className='w-7 md:w-10 hover:scale-105' /></a>
							<a href='https://github.com/jamesdchong' target='__blank'><img src={github} alt="github" className={`${isLight ? '' : "invert"} w-7 md:w-10 hover:scale-105`} /></a>
							<a href='mailto:jamesdchong@gmail.com' target='__blank'><img src={gmail} alt="gmail" className='w-7 md:w-10 hover:scale-105' /></a>
						</div>
						<p className={`${styles.heroSubText} ${isLight ? "text-black-200" : "text-white-100"} mt-2`}>I am a 
						<span className='text-secondary-light'>
							<Typewriter words={[' Software Engineer.', ' Passionate Coder.', ' Sports Enthusiast.']} loop={0} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
						</span></p>
					</div>
					<img src={comp} alt="Working Man" className='pointer-events-none' />
				</div>
			</section>
		</div>
    )
}

export default Hero;