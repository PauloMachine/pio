import * as Keychain from 'react-native-keychain';

export const saveToken = async (token: string): Promise<void> => {
    await Keychain.setGenericPassword('jwt', String(token));
};

export const removeToken = async (): Promise<void> => {
    await Keychain.resetGenericPassword();
};

export const getToken = async (): Promise<string | null> => {
    try {
        const credentials = await Keychain.getGenericPassword();
        return credentials ? credentials.password : null;
    } catch (error) {
        return null;
    }
};
