"use client";

import React, {createContext, ReactNode, useReducer, useContext} from "react";
import globalReducer from "@/context/GlobalReducer";

interface GlobalState {
    focusedProjectId: string | null;
}
interface GlobalProviderProps {
    children: ReactNode;
}
type GlobalAction =
    | { type: 'SET_FOCUSED_PROJECT_ID'; payload: string | null }

const GlobalContext = createContext<{
    focusedProjectId: string | null;
    dispatch: React.Dispatch<GlobalAction>;
} | undefined>(undefined);

export function GlobalProvider({ children } : GlobalProviderProps ) {

    const initialState: GlobalState = {
        focusedProjectId : null
    };
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalContext.Provider value={{
            dispatch,
            focusedProjectId: state.focusedProjectId,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
}

export default GlobalContext;