import dreamcars from '@/public/images/dream-cars/dream-cars-1.jpg';
import reactfilms from '@/public/images/react-films/react-films-1.jpg';
import pokemon from '@/public/images/pokemon/pokemon-2.jpg';
import simplyweather from '@/public/images/simply-weather/simply-weather-4.jpg';
import gamelister from '@/public/images/game-lister/game-lister-1.jpg';
import gamerhaven from '@/public/images/gamerhaven/gamerhaven-1.jpg';
import susyq from '@/public/images/susyq/susyq-1.png';
import rotatingliner from '@/public/images/rotatingliner/rotatingliner-1.png';
import eshopjs from '@/public/images/eshopjs/eshopjs-1.png';

import Project from "@/app/components/Project";
import ProjectModal from "@/app/components/ProjectModal";
import {GlobalProvider} from "@/context/GlobalContext";

interface Object {
    id: string
    title: string,
    github_link: string | null,
    demo_link: string | null,
    image: any
    stack: String[],
    description: string,

}

const Projects = () => {
    const projects: Object[] = [
        {
            id: "eshopjs",
            title: 'eshopjs',
            github_link: "https://github.com/oscar-ct/next-eshop",
            demo_link: "https://eshopjs.com/",
            image: eshopjs,
            stack: ["Next.js", "Prisma", "PostgreSQL", "JavaScript", "React", "TailwindCSS"],
            description: "eshopjs.com is my personal website, built using Next.js to showcase my programming skills through a robust e-commerce platform. It features a curated selection of my favorite picks, with live payments seamlessly integrated via Stripe and PayPal APIs. Fully mobile optimized, the site offers an easy-to-use checkout process and allows users to create accounts to view, manage, and track their orders, with security and authentication handled by NextAuth. It also includes an intuitive admin dashboard for overseeing orders, users, and product listings.",
        },
        {
            id: "susyqcleaning",
            title: 'Susy Q Cleaning',
            github_link: "https://github.com/oscar-ct/susyq",
            demo_link: "https://react-dream-cars.vercel.app/",
            image: susyq,
            stack: ["Next.js", "JavaScript", "React", "TailwindCSS"],
            description: "The soon to be official site for susyqcleaning.com, a website I built using Next.js to optimize search engine visibility and enhance user experience. The project aimed to seamlessly integrate with the customer’s CRM while retaining SEO performance. Styling was subtly refined from the existing site, maintaining familiarity with a modern touch."
        },
        {
            id: "rotatingliner",
            title: 'Rotating Liner',
            github_link: "https://github.com/oscar-ct/nextra-rotatingliner",
            demo_link: "https://rotatingliner.com",
            image: rotatingliner,
            stack: ["Next.js", "TypeScript", "MDX", "JavaScript", "React", "TailwindCSS"],
            description: "The official rotatingliner.com is a website I developed to highlight the engineering of an innovative, efficiency-focused diesel engine technology. Designed to be informative, user-friendly, and SEO-optimized, this project delivers a seamless navigation experience while prioritizing usability and search engine performance.",
        },
        {
            id: "dreamcars",
            title: 'Dream Cars',
            github_link: "https://github.com/oscar-ct/react-dream-cars",
            demo_link: "https://react-dream-cars.vercel.app/",
            image: dreamcars,
            stack: ["Firebase", "Firebase", "JavaScript", "React", "TailwindCSS"],
            description: "Dream Cars is a personal practice project I built using React, Firebase, and Firestore. It’s a fun concept for car enthusiasts—whether you’re looking to rent or buy your dream car, or making money by listing your own vehicles. Users can create accounts, manage car listings with full CRUD functionality, upload images, and explore interactive maps via Mapbox, all as part of my hands-on exploration of Google's Firebase.",

        },
        {
            id: "reactfilms",
            title: 'React Films',
            github_link: "https://github.com/oscar-ct/react-films",
            demo_link: "https://react-films-ten.vercel.app/",
            image: reactfilms,
            stack: ["Javascript", "React", "TailwindCSS"],
            description: "React Films is a personal frontend project I built for movie lovers. Whether you want to relive a favorite film or discover a new one, this app has you covered. Powered by the OMDb API, it lets users search through thousands of movie titles, save their top picks, and share them with ease—all wrapped in a sleek, React-driven interface.",

        },
        {
            id: "pokemon",
            title: 'Pokémon-j',
            github_link: "https://github.com/oscar-ct/pok-mon",
            demo_link: "https://oscar-ct.github.io/pok-mon/",
            image: pokemon,
            stack: ["jQuery"],
            description: "Pokémon-j is a fun, interactive project I built primarily with jQuery to explore the world of Pokémon. Using the PokéAPI, it provides a lively interface where users can discover details like generation, weight, and height for their favorite Pokémon.",

        },
        {
            id: "simplyweather",
            title: 'Simply Weather',
            github_link: "https://github.com/oscar-ct/weather-project",
            demo_link: "https://oscar-ct.github.io/weather-project/",
            image: simplyweather,
            stack: ["Vanilla JavaScript",],
            description: 'Powered by OpenWeather API, Simply weather lets users can view a 7-day forecast of the location of their choosing.  Designed to be intuitive and simple, but still providing users with a plethora of data.'
        },
        {
            id: "gamerhaven",
            title: 'Gamer Haven',
            github_link: "https://github.com/Cappastone/KAPPA",
            demo_link: null,
            image: gamerhaven,
            stack: ["Java Spring Boot", "MySQL", "Thymeleaf", "jQuery", "Bootstrap"],
            description: "Gamer Haven is a social media app created for gamers, developed as a capstone project by a team of five using Agile and Scrum methodologies. Built with Java Spring Boot, users can create accounts, customize their profiles, search and favorite games, follow other gamers, create posts, engage through comments, and more—all within a vibrant, gaming-focused community."
        },
        {
            id: "gamelister",
            title: 'Game Lister',
            github_link: "https://github.com/ChadListers/java-adlister/tree/main",
            demo_link: null,
            image: gamelister,
            stack: ["Java EE", "MySQL", "JSP/JSTL", "Java Servlets",],
            description: "Game Lister is a Craigslist-inspired web app designed for gamers, enabling users to create accounts, browse listings, and post ads with full CRUD functionality. Developed by a team of three, it leverages legacy programming techniques and follows the MVC design pattern. Built with Java EE, Game Lister utilizes Java Servlets and JSPs to deliver a robust, structured platform for gaming enthusiasts.",
        }
    ];

    return (
        <GlobalProvider>
            <section
                id={"projects"}
                className={"px-4 py-20 flex flex-col max-w-screen-2xl mx-auto gap-2 lg:gap-6 lg:p-20 2xl:px-4"}
            >
                <div className={"flex flex-col gap-10"}>
                    <h1 className={"text-center text-4xl font-bold text-purple-500 lg:text-start"}>
                        Some of my work
                    </h1>
                    <h2 className={"text-white text-xl"}>
                        These are some of my most notable projects, I am always coding so be sure to stop by and check out
                        all my repositories <span><a href={"https://github.com/oscar-ct?tab=repositories"} className={"font-bold text-purple-400"}>here</a></span>.
                    </h2>
                    <div className={"flex flex-col gap-6 lg:gap-0 lg:flex-row lg:flex-wrap"}>
                        {
                            projects.map((project : Object, index : number)  => (
                                <Project key={index} project={project}/>
                            ))
                        }
                    </div>
                </div>
            </section>
            <ProjectModal/>
        </GlobalProvider>
    );
};

export default Projects;