const initState = {
    email: '',
    id: '',
    mobile: '',
    name: '',
    redirect: false,
    access_token: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                email: '',
                id: '',
                mobile: '',
                name: '',
                redirect: false
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                email: action.email,
                id: action.id,
                mobile: action.mobile,
                name: action.name,
                redirect: true
            };
        case 'LOGOUT':
            return {
                ...state,
                email: '',
                id: '',
                mobile: '',
                name: '',
                redirect: false
            };
        default: 
            return state;
    }
}

export default authReducer;