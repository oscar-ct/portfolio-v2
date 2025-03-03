"use client"

import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {useGlobalContext} from "@/context/GlobalContext";

interface Props {
    id: string;
}
const ProjectArrows = ({id} : Props) => {
    const { dispatch } = useGlobalContext();

    const openProjectModal = (): void => {
        dispatch({type: "SET_FOCUSED_PROJECT_ID", payload: id});
        const modal = document.getElementById('my_modal') as HTMLDialogElement | null;
        modal?.showModal();
    };

    return (
        <>
            <SlArrowLeft
                onClick={openProjectModal}
                fill={"blue"}
                size={50}
                className={"cursor-pointer absolute left-0 top-0 bottom-0 my-auto"}
            />
            <SlArrowRight
                onClick={openProjectModal}
                fill={"blue"}
                size={50}
                className={"cursor-pointer absolute right-0 top-0 bottom-0 my-auto"}
            />
        </>
    );
};

export default ProjectArrows;