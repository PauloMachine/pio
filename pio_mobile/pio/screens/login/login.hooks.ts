import { useMutation, useQueryClient } from 'react-query';
import { login, logout } from './login.services';
import { Login } from './login.types';

export const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation(
        async (data: Login) => {
            try {
                const token = await login(data);

                if (token !== 'undefined') {
                    queryClient.setQueryData('auth', { token });
                    return token;
                } else {
                    throw new Error('Error useLogin: Token not found');
                }
            } catch (error) {
                throw new Error('Error useLogin: ' + error);
            }
        }
    );
};

export const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation(async () => {
        await logout();
        queryClient.removeQueries('auth');
    });
};
