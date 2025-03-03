import AboutHeadshot from "@/app/components/AboutHeadshot";
import Image from "next/image";
import headshot from "@/public/images/headshot.jpeg";
import React from "react";

const About = () => {
    return (
        <section id={"about-me"} className={"px-4 pt-10 pb-20 flex flex-col max-w-screen-2xl mx-auto gap-2 lg:gap-6 lg:p-20 2xl:px-4"}>
            <div className={"flex flex-col lg:flex-row lg:gap-20"}>
                <div className={"flex flex-col gap-4 lg:pt-16"}>
                    <div className={"text-white leading-7 text-lg font-light"}>
                        Hello, my name is
                    </div>
                    <div className={"text-white text-7xl font-bold"}>
                        <span className={"text-purple-600"}>Oscar</span> Castro.
                    </div>
                    <div className={"text-white text-2xl font-bold"}>
                        I am a full stack web developer based in San Antonio, TX.
                    </div>
                </div>
                <div className={"flex justify-center items-center h-96"}>
                    <div className={"hidden md:block"}>
                        <AboutHeadshot/>
                    </div>
                    <div className={"md:hidden"}>
                        <Image
                            priority
                            className={"rounded-full"}
                            width={300}
                            height={300}
                            src={headshot}
                            alt={"headshot"}
                        />
                    </div>
                </div>
            </div>
            <div className={"flex flex-col gap-10"}>
                <h1 className={"text-center text-4xl font-bold text-purple-500 lg:text-start"}>
                    About Me
                </h1>
                <p className={"text-white leading-7 text-lg font-light"}>
                    I launched my career as a Web Developer in 2022 after transitioning from the Oil & Gas
                    industry,
                    where I worked for over six years as a Procurement Specialist before being laid off. My passion for
                    technology dates back to the MySpace era, when I first explored HTML and CSS. In 2022, I dedicated
                    myself to mastering programming by enrolling in Codeup, an
                    accredited, in-person coding bootcamp in downtown San Antonio.
                    Over six months and 700 hours of intensive training, I earned a Certificate of Completion in Web
                    Development
                    with an overall grade of 99.20%. Through Codeup, I gained the expertise to design and build software
                    for the web,
                    ranging from simple landing pages to sophisticated full-stack applications
                </p>
                <p className={"text-white leading-7 text-lg font-light"}>
                    I am committed to lifelong learning, whether through traditional education, self-directed study, or
                    guidance from mentors. I actively seek opportunities to collaborate with individuals eager to share
                    their knowledge, as I am equally eager to grow. Ultimately, my goal is to develop innovative software
                    alongside inspiring people who bring out my best.
                </p>
            </div>
        </section>
    );
};

export default About;