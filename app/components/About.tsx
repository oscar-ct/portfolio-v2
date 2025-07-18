
const About = () => {
    return (
        <section className={"flex flex-col gap-8"}>
            <h1 className={"uppercase text-lg font-bold text-slate-400"}>
                About
            </h1>
            <div className={"flex flex-col gap-6"}>
                <p className={"leading-7 text-slate-300"}>
                    I’m a Web Developer from San Antonio, Texas, skilled in JavaScript, TypeScript, and
                    Java, building user-focused, accessible web solutions that perform and inspire.
                </p>
                <p className={"leading-7 text-slate-300"}>
                    I began my career as a Web Developer in 2022 after pivoting from a six-year tenure in the Oil & Gas industry as a Procurement Specialist, where I was part of a company-wide layoff.
                    My passion for technology sparked during the MySpace era, when I first dove into HTML and CSS.
                </p>
                <p className={"leading-7 text-slate-300"}>
                    In 2022, I dedicated myself to mastering programming by enrolling in Codeup, an accredited,
                    in-person
                    coding bootcamp in downtown San Antonio.
                    Over six months and 700 hours of intensive training, I earned a Certificate of Completion in Web
                    Development with an overall grade of 99.20%. Through Codeup, I gained the expertise to design and
                    build
                    software for the web, ranging from simple landing pages to sophisticated full-stack applications.
                </p>
                <p className={"leading-7 text-slate-300"}>
                    Since then, I have committed to continue learning, whether through traditional education,
                    self-directed
                    study, or guidance from mentors. I actively seek opportunities to collaborate with individuals eager
                    to share their knowledge, as I am equally eager to grow. Ultimately, my goal is to develop
                    innovative
                    software alongside inspiring people who bring out my best.
                </p>
            </div>
        </section>
    );
};

export default About;