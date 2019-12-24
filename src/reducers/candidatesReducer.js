export default function condidatesReducer(state, action) {
    switch (action.type) {
        case "ADD_CANDIDATE":
            return [...state, action.candidate]

        default:
            return state;
    }
}