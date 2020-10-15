import {PostData} from '../../services/PostData'

export const login = (credentials) => {
    return(dispatch, getState) => {
        PostData('login', credentials).then((result) => {
            let res = result;
            if(res.status === true) {
                alert('Login success');
                localStorage.setItem('access_token', res.access_token)
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    email: res.user.email,
                    id: res.user.id,
                    mobile: res.user.mobile,
                    name: res.user.name
                });
            } else {
                alert('Login Error');
                dispatch({type: 'LOGIN_ERROR'});
            }
        })
    }
}

export const signup = (userData) => {
    return(dispatch, getState) => {
        PostData('register', userData).then((result) => {
            let res = result;
            if(res.status === true) {
                alert('Login success');
                localStorage.setItem('access_token', res.access_token)
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    email: res.user.email,
                    id: res.user.id,
                    mobile: res.user.mobile,
                    name: res.user.name
                });
            } else {
                alert('Login Error');
                dispatch({type: 'LOGIN_ERROR'});
            }
        })
    }
}

export const socialAuth = (userData) => {
    return(dispatch, getState) => {
        PostData('social-login', userData).then((result) => {
            let res = result;
            if(res.status === true) {
                alert('Login success');
                localStorage.setItem('access_token', res.access_token)
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    email: res.user.email,
                    id: res.user.id,
                    mobile: '',
                    name: res.user.name
                });
            } else {
                console.log(res);
                dispatch({type: 'LOGIN_ERROR'});
            }
        })
    }
}

export const logout = (credentials) => {      
    return(dispatch, getState) => {
        PostData('logout', credentials).then((result) => {
            localStorage.removeItem('access_token')
            dispatch({
                type: 'CLEAR_DASHBOARD'
            })
            dispatch({
                type: 'LOGOUT'
            })
        })
    }

}