import React from 'react';
import { View, Text, TextInput, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import styles from './login.styles';
import { LoginScreenProps, Login } from './login.types';
import { Controller, useForm } from 'react-hook-form';
import { useLogin } from './login.hooks';


const LoginScreen = ({ navigation }: LoginScreenProps) => {
    const { control, handleSubmit, formState: { errors } } = useForm<Login>();
    const login = useLogin();

    const onSubmit = async (data: Login) => {
        try {
            const token = await login.mutateAsync(data);

            if (token) {
                navigation.navigate('AviaryList');
            } else {
                throw new Error('Error LoginScreenOnSubmit: Token not found');
            }
        } catch (error) {
            Alert.alert('Erro ao acessar');
        }
    };

    return (
        <SafeAreaView style={styles.safeAreaViewLogin}>
            <Image source={require('../../assets/logo.jpeg')} style={styles.imageLogo} />
            <View style={styles.viewFormLogin}>
                <Controller
                    control={control}
                    rules={{ required: 'O usuários é obrigatório' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Usuário"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.textInputLogin}
                            autoCapitalize="none"
                        />
                    )}
                    name="username"
                />
                {errors.username && <Text style={styles.textError}>{errors.username.message}</Text>}

                <Controller
                    control={control}
                    rules={{ required: 'A senha é obrigatória' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Senha"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry
                            style={styles.textInputLogin}
                            autoCapitalize="none"
                        />
                    )}
                    name="password"
                />
                {errors.password && <Text style={styles.textError}>{errors.password.message}</Text>}
                <TouchableOpacity style={styles.touchableOpacityLogin} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.textLogin}>ACESSAR</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
