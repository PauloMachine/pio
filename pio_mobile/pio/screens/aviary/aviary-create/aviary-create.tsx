import React from 'react';
import { View, TextInput, Text, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useAviaries, useCreateAviary } from '../aviary.hooks';
import FooterButton from '../../../components/footer/button';
import styles from './aviary-create.styles';
import { AviaryCreateScreenProps } from './aviary-create.types';
import { Aviary } from '../aviary.types';
import Input from '../../../components/input';


const CreateAviaryScreen = ({ navigation }: AviaryCreateScreenProps) => {
    const { refetch } = useAviaries()
    const { control, handleSubmit, formState: { errors } } = useForm<Aviary>({
        defaultValues: {
            name: '',
        },
    });

    const mutation = useCreateAviary({
        onSuccess: () => {
            Alert.alert('Cadastro de aviário realizado com sucesso.')
            refetch()
            navigation.navigate('AviaryList')
        },
        onError: (error: unknown) => {
            Alert.alert('Erro ao realizar o cadastro de aviário.')
            console.log(error)
        },
    });

    const onSubmit = (data: Aviary) => {
        mutation.mutate(data);
    };

    return (
        <>
            <View style={styles.viewAviaryCreate}>
                <Controller
                    control={control}
                    rules={{
                        required: 'O nome do aviário é obrigatório',
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Nome do aviário"
                            placeholder="Nome do aviário"
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            error={errors?.name?.message}
                        />
                    )}
                    name="name"
                />
            </View>
            <FooterButton title="SALVAR AVIÁRIO" onPress={handleSubmit(onSubmit)} />
        </>
    );
};

export default CreateAviaryScreen;
