
import Project from "@/app/components/Project";
import ProjectModal from "@/app/components/ProjectModal";
import {GlobalProvider} from "@/context/GlobalContext";
import {projects, ProjectType} from "@/app/assets/projectsList";


const Projects = () => {
    return (
        <GlobalProvider>
            <section id={"projects"} className={"flex flex-col gap-10"}>
                <h1 className={"uppercase text-xl font-bold text-slate-400"}>
                    Projects
                </h1>
                {/*<h2 className={"leading-7 text-slate-300"}>*/}
                {/*    These are some of my most notable projects, I am always coding so be sure to stop by and check out*/}
                {/*    all my <span><a href={"https://github.com/oscar-ct?tab=repositories"} className={"font-bold text-purple-500 underline"}>repositories.</a></span>*/}
                {/*</h2>*/}
                <div className={"flex flex-col items-center gap-20"}>
                    {
                        projects.map((project : ProjectType, index : number)  => (
                            <Project key={index} project={project}/>
                        ))
                    }
                </div>
            </section>
            <ProjectModal/>
        </GlobalProvider>
    );
};

export default Projects;