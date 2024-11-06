import { post } from '../../services/methods';
import { removeToken, saveToken } from '../../services/token';
import { TokenResponse } from '../../services/types';
import { Login } from './login.types';

export const login = async (login: Login): Promise<string> => {
    const response = await post<TokenResponse, Login>('/login', login);
    const { token } = response;
    await saveToken(token);
    return token;
};

export const logout = async (): Promise<void> => {
    await removeToken();
};
