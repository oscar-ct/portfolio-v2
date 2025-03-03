interface GlobalState {
    focusedProjectId: string | null;
}

type GlobalAction =
    | { type: 'SET_FOCUSED_PROJECT_ID'; payload: string | null };

export default function globalReducer(state: GlobalState, action: GlobalAction): GlobalState {
    switch (action.type) {
        case 'SET_FOCUSED_PROJECT_ID':
            return {
                ...state,
                focusedProjectId: action.payload !== null ? String(action.payload) : null
            };
        default:
            return state;
    }
}