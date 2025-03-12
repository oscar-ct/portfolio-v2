"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {FaGithub} from "react-icons/fa";
import {familiarTechnologies} from "@/app/assets/familiarTechnologiesList";

interface TechnologyProps {
    technology: string;
    isOpen: boolean;
    setOpenTitle: (title: string | null) => void;
    isDesktop: boolean;
}

const Technology = ({ technology, isOpen, setOpenTitle, isDesktop }: TechnologyProps) => {

    const [isHovered, setIsHovered] = useState(false);

    // const selectedTechnology = familiarTechnologies.find((tech) => tech.technologies.includes(technology))?.description ||
    //     "No summary available for this technology.";

    const selectedTechnology = familiarTechnologies.find((tech) => tech.technologies.includes(technology)) || {projects: null};

    const popupVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 10, scale: 0.95 },
    };

    return (
        <div
            className="relative w-full"
            onMouseEnter={() => isDesktop && setIsHovered(true)}
            onMouseLeave={() => isDesktop && setIsHovered(false)}
        >
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => !isDesktop && setOpenTitle(isOpen ? null : technology)}
                className={`${!isDesktop && isOpen ? "bg-slate-500" : " bg-slate-700"} w-full py-5 text-center relative rounded-xl overflow-hidden group sm:hover:bg-gradient-to-r sm:hover:from-slate-700 sm:hover:to-slate-500 sm:transition-all sm:ease-out sm:duration-300`}            >
                <span className={"hidden absolute right-0 w-8 h-32 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease sm:inline"}/>
                <span className="text-white text-sm">{technology}</span>
            </motion.button>

            {/* Popup Card */}
            <AnimatePresence>
                {(isDesktop ? isHovered : isOpen) && (
                    <motion.div
                        // className={`absolute z-10 w-full max-w-[80vw] md:w-64 p-4 bg-gray-800 text-white rounded-lg shadow-lg mt-2 left-0 md:left-auto md:top-full md:mt-1`}
                        className={"absolute z-10 w-full p-2.5 bg-gray-800 rounded-lg shadow-lg mt-2 left-0 sm:p-4 md:right-0 md:top-full md:mt-1"}
                        variants={popupVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                    >
                        <div className={"flex flex-col gap-3"}>
                            {/*<h3 className="text-lg font-semibold">{`${technology} Project's`}</h3>*/}
                            <div className="text-sm text-slate-400">
                                {technology} Featured Projects
                            </div>
                            <div className="flex justify-center text-accent md:justify-start">
                               <FaGithub size={25}/>
                            </div>
                            {selectedTechnology.projects && selectedTechnology.projects.length > 0 && (
                                <>
                                    {selectedTechnology.projects.map((project, index) => (
                                        <div className={"text-sm flex gap-2 items-center sm:text-base link link-accent"}
                                             key={index}>
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {project.name}
                                            </a>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Technology;