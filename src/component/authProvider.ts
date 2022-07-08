import { AuthProvider } from 'react-admin';

const authProvider: AuthProvider = {
    login: ({ username }) => {
        localStorage.setItem('hoai', username);
        // accept all username/password combinations
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem('hoai');
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        localStorage.getItem('hoai') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.reject('Unknown method'),
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: 'Bao Hoai',
            avatar:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYiVBSK7G0JSg2LwPdFMxl44SZZL0p3uzFg&usqp=CAU',
        }),
};

export default authProvider;