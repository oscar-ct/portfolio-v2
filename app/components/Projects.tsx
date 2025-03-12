
import Project from "@/app/components/Project";
import ProjectModal from "@/app/components/ProjectModal";
import {GlobalProvider} from "@/context/GlobalContext";
import {projects, ProjectType} from "@/app/assets/projectsList";


const Projects = () => {
    return (
        <GlobalProvider>
            <section
                id={"projects"}
                className={"px-8 py-20 flex flex-col max-w-screen-xl mx-auto gap-2 lg:gap-6"}
            >
                <div className={"flex flex-col gap-10"}>
                    <h1 className={"text-center text-4xl font-bold text-accent"}>
                        Some of my work
                    </h1>
                    <h2 className={"leading-7 text-slate-300 text-lg text-center"}>
                        These are some of my most notable projects, I am always coding so be sure to stop by and check out
                        all my repositories <span><a href={"https://github.com/oscar-ct?tab=repositories"} className={"font-bold link link-accent"}>here</a></span>.
                    </h2>
                    <div className={"flex flex-col items-center gap-20"}>
                        {
                            projects.map((project : ProjectType, index : number)  => (
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