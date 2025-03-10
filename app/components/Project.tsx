import Image from "next/image";
import ProjectArrows from "@/app/components/ProjectArrows";

interface PropType {
    id: string,
    title: string,
    github_link: string | null,
    demo_link: string | null,
    image: any
    stack: String[],
    description: string,

}

interface Props {
    project: PropType;
}

const Project = ({project} : Props) => {
    return (
        <div className={"w-full lg:w-6/12 lg:p-4"}>
            <div className={"h-full bg-slate-700 rounded-xl"}>
                <div className={"relative"}>
                    <Image
                        src={project.image}
                        alt={"placeholder"}
                        width={750}
                        height={500}
                        className={"rounded-tl-xl rounded-tr-xl w-full object-fit"}
                    />
                    <ProjectArrows id={project.id}/>
                </div>
                <div className={"p-3 flex flex-col gap-6 sm:p-6"}>
                    <div className={"flex flex-col gap-4 sm:flex-row sm:justify-between"}>
                        <div className={"text-3xl text-white font-bold truncate"}>
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

                    <div className={"flex flex-wrap gap-4"}>
                        {
                            project.stack.map((item: String, index: number) => {
                                return (
                                    <h5 key={index} className={"text-purple-500 text-lg font-bold"}>
                                        {item}
                                    </h5>
                                )
                            })
                        }
                    </div>
                    <div className={"text-white leading-7"}>
                        {project.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;