import Image from "next/image";
import ProjectArrows from "@/app/components/ProjectArrows";
import { ProjectType } from "@/app/assets/projectsList";

interface Props {
    project: ProjectType;
}

const Project = ({project} : Props) => {
    return (
        <div className={"w-full flex flex-col"}>
            <div className={"flex flex-col md:flex-row"}>
                <div className={"w-full md:w-7/12"}>
                    <div className={"relative"}>
                        <Image
                            src={project.image}
                            alt={"placeholder"}
                            width={750}
                            height={500}
                            className={"rounded-xl object-fill"}
                        />
                        <ProjectArrows id={project.id}/>
                        <div className={"absolute w-full h-full top-0 rounded-xl bg-accent opacity-20 hover:opacity-0 hover:transition-all hover:duration-500 hover:transform"}/>
                    </div>
                </div>
                <div className={"w-full md:w-5/12"}>
                    <div className={"py-6 flex flex-col gap-6 md:p-0 md:items-end"}>
                        <div className={"flex flex-col gap-4 md:items-end md:pt-10"}>
                            <div className={"text-2xl text-white font-bold truncate md:text-3xl"}>
                                {project.title}
                            </div>
                            <div className={"flex gap-2"}>
                                {
                                    project.demo_link && (
                                        <a
                                            href={project.demo_link}
                                            className={"btn btn-sm"}
                                        >
                                            <span className={"text-sm"}>Demo</span>
                                        </a>
                                    )
                                }
                                {
                                    project.github_link && (
                                        <a
                                            href={project.github_link}
                                            className={"btn btn-sm btn-neutral"}
                                        >
                                            <span className={"text-white text-sm"}>Repo</span>
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                        <div className={"flex flex-wrap gap-4 md:justify-end"}>
                            {
                                project.stack.map((item: String, index: number) => {
                                    return (
                                        <h5 key={index} className={"text-accent text-sm font-bold"}>
                                            {item}
                                        </h5>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex justify-center"}>
                <div className={"rounded-xl bg-slate-800 transition-all duration-500 transform md:hover:-translate-y-0 md:max-w-screen-md md:-translate-y-4 md:translate-x-4 lg:hover:-translate-y-8 lg:-translate-y-12 lg:translate-x-12"}>
                    <div className={"p-4 text-slate-200 leading-7 md:p-6"}>
                        {project.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;