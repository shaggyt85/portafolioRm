import { IoCodeWorking, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io5";
import img1  from "../image/beerbotclub.png"
import img2 from "../image/visibilitytech.png"
import img3 from "../image/dashboard.png"
import img4 from   "../image/landpages.png"
import img5 from "../image/bmfund.png"

export const Experience = [
    {
        id: 1,
        date: "2022 - present",
        iconsSrc: <IoCodeWorking />,
        title: "Front-End Developer",
        location: "Venezuela",
        name_company: "BmBot Solutions",
        describe: "Development of App, User Experience, Connectivity with SmartContract, Web3",
    },
    {
    id: 2,
        date: "2021 - 2022 finished",
        iconsSrc: <IoCodeWorking />,
        title: "Developer Software",
        location: "Chile",
        name_company: "Visibilitytech",
        describe: "Development of App, User Experience, Visual Design, Project Management",
    },
    {
        id: 3,
            date: "2019 - 2022 finished",
            iconsSrc: <IoCodeWorking />,
            title: "Control and Logistics Coordinator",
            location: "Chile",
            name_company: "TechSolutions",
            describe: "General coordinator of all technicians, User Experience, Front-End, Project Lead",
        }
    ]

export const Projects = [
    {
        id: 1,
        name: "BeerbotClub",
        imageSrc: img1,
        techs: "React JS, Css3, Web3 js ",
        github: "#",
        web: "https://beerbot.club"
    },
    {
        id: 2,
        name: "VisibilityTech",
        imageSrc: img2,
        techs: "Html5, Css3, Bootstrap ",
        github: "#",
        web: "https://visibilitytech.cl"
    },
    {
        id: 3,
        name: "Dashboard E-commerce",
        imageSrc: img3,
        techs: "Nextjs ",
        github: "https://github.com/shaggyt85/react-shop-admin",
        web: "https://github.com/shaggyt85/react-shop-admin"
    },
    {
        id: 4,
        name: "LandPages galery",
        imageSrc: img4,
        techs: "Javascript Vainilla",
        github: "https://github.com/shaggyt85/async_landpages",
        web: "https://github.com/shaggyt85/async_landpages"
    },
    {
        id: 5,
        name: "Dashboard Api-full",
        imageSrc: img5,
        techs: "Reactjs, ExpressJS",
        github: "#",
        web: "#"
    },
]

export const SocialLinks = [
    {
        id: '1',
        name: 'Twitter',
        iconsSrc: <IoLogoTwitter className="text-twitter text-3xl cursor-pointer" />,
        link: 'https://twitter.com/shaggyt851'
    },
    {
        id: '2',
        name: 'YouTube',
        iconsSrc: <IoLogoYoutube className="text-youtube text-3xl cursor-pointer" />,
        link: '#'
    },
    {
        id: '3',
        name: 'Github',
        iconsSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
        link: 'https://github.com/shaggyt85'
    },
    {
        id: '4',
        name: 'LinkeId',
        iconsSrc: <IoLogoLinkedin className="text-linkeId text-3xl cursor-pointer" />,
        link: 'https://linkedin.com/in/robertmedina85'
    },
    {
        id: '5',
        name: 'Whatssap',
        iconsSrc: <IoLogoWhatsapp className="text-whatssap text-3xl cursor-pointer" />,
        link: 'https://wa.me/584122112526'
    },
]