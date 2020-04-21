import axios from 'axios';

export const loginAuth = () => {
    return axios.get('/login', {
        email,
        password
    });
};

export const registerAuth = ({firstName, lastName}) => {
    return axios.post('/register', {
        email,
        password
    });
};