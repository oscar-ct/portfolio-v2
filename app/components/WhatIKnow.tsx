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
        <section id={"what-i-know"} className={"flex flex-col gap-10"}>
            <h1 className={"uppercase text-lg font-bold text-slate-400"}>
                Experience
            </h1>
            <div className={"flex flex-col gap-6"}>
                <h2 className={"text-center text-purple-300"}>
                    Programming Languages
                </h2>
                <div className="grid grid-cols-2 gap-4 text-sm font-bold text-slate-100 md:grid-cols-3 xl:grid-cols-4">
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
                <h2 className={"text-center text-purple-300"}>
                    Libraries & Frameworks
                </h2>
                <div className="grid grid-cols-2  gap-4 text-sm font-bold text-slate-100 md:grid-cols-3 xl:grid-cols-4">
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
                <h2 className={"text-center text-purple-300"}>
                    Tools & Platforms
                </h2>
                <div className="grid grid-cols-2 gap-4 text-sm font-bold text-slate-100 md:grid-cols-3 xl:grid-cols-4">
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