const defaultState = {
    user: {
        name: '',
        age: '',
        gender: '',
    },
    profile: 'public',
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                },
            }
        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.payload,
            }
        default:
            return state
    }
}
