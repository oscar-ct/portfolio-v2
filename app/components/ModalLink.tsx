"use client";

import {useGlobalContext} from "@/context/GlobalContext";
import {ReactNode} from "react";

interface Props {
    id: string;
    children: ReactNode;
    className?: string;
}

const ModalLink = ({children, id, className} : Props) => {

    const { dispatch } = useGlobalContext();

    const openProjectModal = (id: string): void => {
        dispatch({type: "SET_FOCUSED_PROJECT_ID", payload: id});
        const modal = document.getElementById('my_modal') as HTMLDialogElement | null;
        modal?.showModal();
    };

    return (
        <div
            className={className}
            onClick={() => openProjectModal(id)}
        >
            {children}
        </div>
    );
};

export default ModalLink;