import { car, arcade, eventlife, tritontalk} from '../assets';
import { python, java, c, cpp, csharp, sql, css, html, javascript, reactjs, raspberrypi, firebase, vscode, eclipse, github, linux, windows, mac, wifi, bluetooth, electron, android } from '../assets';

export const aboutMe = "Hi, I'm James, a Software Developer and recent graduate who loves turning complex challenges into creative solutions, especially when it involves bridging software and hardware together. \n Recently, I built an autonomous car using a Raspberry Pi, where I delved into Python, A* pathfinding, and OpenCV object detection to make the car navigate and react to various objects. I've also worked on an arcade basketball game with score detection, developed a C-based router, and led the creation of EventLife, an Android app that saw 300 users in its first month. \n With a Master's in Computer Science from UIUC and a Bachelor's from UC San Diego, I've built a strong foundation software development. I'm always excited to take on new challenges and collaborate with others to create innovative, high performing systems."

export const languages = [
    {title: 'Python', icon: python, invert: false },
    {title: 'Java', icon: java, invert: false },
    {title: 'C', icon: c, invert: false },
    {title: 'C++', icon: cpp, invert: false },
    {title: 'C#', icon: csharp, invert: false },
    {title: 'HTML', icon: html, invert: false },
    {title: 'CSS', icon: css, invert: false },
    {title: 'Javascript', icon: javascript, invert: false }, 
    {title: 'SQL', icon: sql, invert: true }
];

export const frameworks = [
    {title: 'Raspberry Pi', icon: raspberrypi, invert: false },
    {title: 'Firebase', icon: firebase, invert: false },
    {title: 'React', icon: reactjs, invert: false },
    {title: 'Electron', icon: electron, invert: false },
    {title: 'VS Code', icon: vscode, invert: false },
    {title: 'Eclipse', icon: eclipse, invert: false },
    {title: 'GitHub', icon: github, invert: false },
    {title: 'Linux', icon: linux, invert: false },
    {title: 'Windows', icon: windows, invert: false },
    {title: 'MacOS', icon: mac, invert: false },
    {title: 'Android Studio', icon: android, invert: false },
]

export const projects = [
    {
        title: "Self-Driving Car",
        description: "Autonomous car system using Python and Linux on a Raspberry Pi, integrating advanced algorithms, custom software, and hardware to create a self-driving vehicle with real-time control and obstacle avoidance. \n\n The project involved assembling the chassis, overcoming space constraints and hardware limitations, and ensuring proper component functionality through extensive testing. I implemented the A* search algorithm for pathfinding and ultrasonic sensors for 180-degree mapping, creating detailed obstacle maps. TensorFlow and OpenCV were integrated for real-time object detection, enhanced by multithreading for improved efficiency. The car adjusts its path dynamically using A* and recalculates routes in real-time, with a manual control interface built using Electron.js for wireless operation via Wi-Fi and Bluetooth.",
        stack: [python, raspberrypi, electron, linux, wifi, bluetooth],
        source: "https://github.com/jamesdchong/Self-Driving-Car",
        media: car
    },
    {
        title: "Arcade Basketball Game",
        description: "Interactive arcade basketball game using a Raspberry Pi to transform traditional mini hoops into a competitive, engaging experience. By incorporating a real-time scoreboard and timer, the game tracks baskets made within a minute, encouraging physical activity and social interaction. Key features include a high-accuracy scoring system using an ultrasonic sensor with 96% accuracy, and a dynamic scoreboard interface built with HTML, CSS, JavaScript, and Electron.js for real-time updates. I optimized communication between the scoring system and the interface using a Python-based client-server model, reducing latency to 25 ms. The streamlined design features a Wi-Fi-enabled scoreboard displayed on a laptop, enhancing usability and reducing hardware complexity.",
        stack: [python, raspberrypi, electron, html, css, javascript, wifi],
        source: "https://github.com/jamesdchong/Arcade-Basketball-Game",
        media: arcade
    },
    {
        title: "EventLife",
        description: "Android application using Java and Firebase Realtime Database, designed for a seamless and engaging user experience. I managed the entire software development life cycle, optimizing performance and delivering impressive results. Key features include a data-driven app with an intuitive interface and real-time data synchronization, which attracted 300 active users in the first month. As the Software Development Lead, I utilized Agile methodologies and GitHub for version control, reducing the development cycle from 6 to 4 months while ensuring a defect-free release. Performance optimizations reduced load times from 5 to 3 seconds, significantly enhancing user experience.",
        stack: [java, firebase, android],
        source: "https://github.com/jamesdchong/EventLife",
        media: eventlife
    },
    {
        title: "TritonTalk",
        description: "Custom router in C that manages raw Ethernet frames, ARP caching, and IP routing using the longest prefix match (LPM) algorithm. Capable of processing up to 1000 packets per second with 0 packet loss, this router enhances network diagnostics and reduces latency by optimizing ARP request handling while supporting key protocols like IP, ICMP, and ARP. The router’s advanced design ensures reliable packet processing in static network topologies, maintaining uninterrupted service. Enhanced protocol support improved network diagnostics and reduced error response times by 22%. Additionally, optimized ARP request management cut unnecessary requests by 56%, reducing network overhead and latency by 14%.",
        stack: [c],
        source: "https://github.com/jamesdchong/TritonTalk",
        media: tritontalk
    },

]