import Image from "next/image";
import headshot from "@/public/images/headshot.jpeg";

const About = () => {
    return (
        // <div className={"px-4 pt-10 pb-20 flex flex-col max-w-screen-2xl gap-2 lg:gap-6 lg:p-20 2xl:px-4"}>

            <section className={"pb-20 px-8 max-w-screen-xl mx-auto gap-10 flex flex-col lg:flex-row lg:items-center"}>
                <div className={"flex flex-col gap-10 lg:w-8/12"}>
                    <h1 className={"text-center text-4xl font-bold text-accent lg:text-start"}>
                        A little about me
                    </h1>
                    <p className={"leading-7 text-slate-300 text-lg"}>
                        I launched my career as a Web Developer in 2022 after transitioning from the Oil & Gas
                        industry,
                        where I worked for over six years as a Procurement Specialist before being laid off. My passion
                        for
                        technology dates back to the MySpace era, when I first explored HTML and CSS. In 2022, I
                        dedicated
                        myself to mastering programming by enrolling in Codeup, an
                        accredited, in-person coding bootcamp in downtown San Antonio.
                        Over six months and 700 hours of intensive training, I earned a Certificate of Completion in Web
                        Development
                        with an overall grade of 99.20%. Through Codeup, I gained the expertise to design and build
                        software
                        for the web,
                        ranging from simple landing pages to sophisticated full-stack applications
                    </p>
                    <p className={"hidden leading-7 text-slate-300 text-lg lg:block"}>
                        I am committed to lifelong learning, whether through traditional education, self-directed
                        study,
                        or
                        guidance from mentors. I actively seek opportunities to collaborate with individuals eager
                        to
                        share
                        their knowledge, as I am equally eager to grow. Ultimately, my goal is to develop innovative
                        software
                        alongside inspiring people who bring out my best.
                    </p>
                </div>
                <div className={"flex flex-col justify-center items-center gap-10 lg:w-4/12"}>
                    <div className={"relative"}>
                        <Image
                            priority
                            className={"w-72 h-72 rounded-full"}
                            width={300}
                            height={300}
                            src={headshot}
                            alt={"headshot"}
                        />
                        <div className={"absolute top-0 rounded-full w-72 h-72 bg-accent opacity-20 hover:opacity-0 hover:transition-all hover:duration-500 hover:transform"}/>
                    </div>

                    <p className={"leading-7 text-slate-300 text-lg lg:hidden"}>
                        I am committed to lifelong learning, whether through traditional education, self-directed
                        study,
                        or
                        guidance from mentors. I actively seek opportunities to collaborate with individuals eager
                        to
                        share
                        their knowledge, as I am equally eager to grow. Ultimately, my goal is to develop innovative
                        software
                        alongside inspiring people who bring out my best.
                    </p>
                </div>
            </section>
// </div>
    );
};

export default About;