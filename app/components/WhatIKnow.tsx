"use client";
import Technology from "@/app/components/Technology";
import {useEffect, useState} from "react";

const WhatIKnow = () => {

    const [openTitle, setOpenTitle] = useState<string | null>(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    const programmingLanguages  = ["Java", "JavaScript ES6", "TypeScript", "SQL"];
    const librariesAndFrameworks  = ["jQuery", "React.js", "Next.js", "Express.js", "Spring Boot", "JSP/JSTL", "Servlets", "TailwindCSS", "Bootstrap"];
    const toolsAndPlatforms  = ["Prisma", "PostgreSQL", "MySQL", "Mongoose", "MongoDB", "Firebase", "Redux Toolkit",];

    return (
        <section id={"what-i-know"} className={"px-8 py-20 flex flex-col max-w-screen-xl mx-auto lg:gap-6"}>
            <div className={"flex flex-col gap-10"}>
                <h1 className={"text-center text-4xl font-bold text-accent"}>
                    Some technologies I work with
                </h1>
                <h2 className={"text-white text-2xl font-bold"}>
                    Programming Languages
                </h2>
                <div className="grid grid-cols-2 gap-4 text-sm font-bold text-slate-100 md:grid-cols-3 lg:grid-cols-4">
                    {programmingLanguages.map((technology) => (
                        <Technology
                            key={technology}
                            technology={technology}
                            isOpen={openTitle === technology}
                            setOpenTitle={setOpenTitle}
                            isDesktop={isDesktop}
                        />
                    ))}
                </div>
                <h2 className={"text-white text-2xl font-bold"}>
                    Libraries & Frameworks
                </h2>
                <div className="grid grid-cols-2  gap-4 text-sm font-bold text-slate-100 md:grid-cols-3 lg:grid-cols-4">
                    {librariesAndFrameworks.map((technology) => (
                        <Technology
                            key={technology}
                            technology={technology}
                            isOpen={openTitle === technology} // Only open if this title matches
                            setOpenTitle={setOpenTitle}
                            isDesktop={isDesktop}
                        />
                    ))}
                </div>
                <h2 className={"text-white text-2xl font-bold"}>
                    Tools & Platforms
                </h2>
                <div className="grid grid-cols-2 gap-4 text-sm font-bold text-slate-100 md:grid-cols-3 lg:grid-cols-4">
                    {toolsAndPlatforms.map((technology) => (
                        <Technology
                            key={technology}
                            technology={technology}
                            isOpen={openTitle === technology}
                            setOpenTitle={setOpenTitle}
                            isDesktop={isDesktop}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIKnow;