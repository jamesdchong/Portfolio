import { useContext } from 'react';
import { styles } from "../styles";
import { context } from '../App';
import { aboutMe } from '../constants';

const About = () => {
    const { isLight } = useContext(context);

    return (
        <div id="about" className={`mt-10 ${styles.paddingX} max-w-7xl mx-auto flex flex-col items-start justify-between`}>
            <p className={`${styles.sectionSubText} ${isLight ? "text-black-200" : "text-white-100" } mt-10 font-semibold`}>About Me</p>
            <h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-200" : "text-white-100" } mb-10`}>Introduction.</h2>
            <div className={`${isLight ? "text-secondary-text-light" : "text-secondary-dark" } text-[17px] max-w-5xl leading-[30px] md:ml-3`}>
                {aboutMe.split('\n').map((para, index) => (
                    <div key={index}>
                        <p>{para}</p>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About;