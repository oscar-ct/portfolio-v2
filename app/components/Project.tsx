import Image from "next/image";
import { ProjectType } from "@/app/assets/projectsList";
import {FaGithub} from "react-icons/fa";
import {MdArrowOutward} from "react-icons/md";
import ModalLink from "@/app/components/ModalLink";

interface Props {
    project: ProjectType;
}

const Project = ({project} : Props) => {
    return (
        <div className={"w-full flex flex-col"}>
            <div className={"flex flex-col-reverse md:flex-row md:gap-4"}>
                <div className={"md:w-4/12"}>
                    <ModalLink id={project.id}>
                        <div className={"relative cursor-pointer"}>
                            <Image
                                src={project.image}
                                alt={"placeholder"}
                                width={750}
                                height={500}
                                className={"rounded max-w-72 md:w-full object-fill"}
                            />
                            <div className={"absolute max-w-72 md:w-full h-full top-0 rounded bg-purple-500 opacity-20 hover:opacity-0 hover:transition-all hover:duration-500 hover:transform"}/>
                        </div>
                        <div className={"mt-3 font-semibold cursor-pointer text-slate-200 hover:text-purple-500 hover:transition-all hover:duration-300"}>
                            View Gallery
                        </div>
                    </ModalLink>
                </div>
                <div className={"md:w-8/12"}>
                    <div className={"py-6 flex flex-col gap-6 md:p-0"}>
                        <div className={"flex flex-col gap-4"}>
                            <div className={"flex justify-between"}>
                                {
                                    project.demo_link ? (
                                        <a
                                            href={project.demo_link}
                                            className={"flex gap-2 text-white hover:text-purple-500 hover:transition-all hover:duration-300"}
                                        >
                                            <div className={"text-xl font-semibold"}>
                                                {project.title}
                                            </div>
                                            <MdArrowOutward size={20}/>
                                        </a>
                                    ) : (
                                        <div className={"text-xl text-white font-semibold"}>
                                            {project.title}
                                        </div>
                                    )
                                }
                                {
                                    project.github_link && (
                                        <a
                                            href={project.github_link}
                                            className={"text-white hover:text-purple-500 hover:transition-all hover:duration-300"}
                                        >
                                            <FaGithub
                                                size={20}
                                            />
                                        </a>
                                    )
                                }
                            </div>
                            <p className={"text-sm text-slate-300 leading-6"}>
                                {project.description}
                            </p>
                        </div>
                        <div className={"flex flex-wrap gap-4"}>
                            {
                                project.stack.map((item: String, index: number) => {
                                    return (
                                        <h5 key={index} className={"p-2 rounded-full bg-purple-500/30 text-purple-300 text-xs font-semibold"}>
                                            {item}
                                        </h5>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className={"rounded-xl bg-slate-800 transition-all duration-500 transform md:-translate-y-4 md:-translate-x-4 md:hover:-translate-y-0 lg:-translate-y-12 lg:-translate-x-12 lg:hover:-translate-y-8"}>*/}
            {/*    <p className={"text-sm p-4 text-slate-200 leading-7 md:p-6"}>*/}
            {/*        {project.description}*/}
            {/*    </p>*/}
            {/*</div>*/}
        </div>
    );
};

export default Project;