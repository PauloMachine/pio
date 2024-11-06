import React from 'react';
import { View, TextInput, Text, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useCreateLot, useLots } from '../lot.hooks';
import FooterButton from '../../../components/footer/button';
import styles from './lot-create.styles';
import { LotCreateScreenProps } from './lot-create.types';
import { Lot, LotId } from '../lot.types';
import Input from '../../../components/input';

const LotCreateScreen = ({ navigation, route }: LotCreateScreenProps) => {
    const { aviaryId } = route.params;
    const { refetch } = useLots(aviaryId)

    const { control, handleSubmit, formState: { errors } } = useForm<LotId>({
        defaultValues: {
            aviaryId: aviaryId,
            chicksCount: 0,
            chickValue: 0
        },
    });

    const mutation = useCreateLot({
        onSuccess: () => {
            Alert.alert('Cadastro de lote realizado com sucesso.');
            refetch()
            navigation.navigate('LotList', { aviaryId });
        },
        onError: (error: unknown) => {
            Alert.alert('Erro ao realizar o cadastro de lote.');
            console.log(error);
        },
    });

    const onSubmit = (data: Lot) => {
        mutation.mutate({ aviaryId, lot: data });
    };

    return (
        <>
            <View style={styles.viewLotCreate}>
                <Controller
                    control={control}
                    rules={{
                        required: 'A quantidade de pintinhos é obrigatória',
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Quantidade de pintinhos"
                            placeholder="Quantidade de pintinhos"
                            onBlur={onBlur}
                            onChange={onChange}
                            value={String(value)}
                            keyboardType="numeric"
                            error={errors?.chicksCount?.message}
                        />
                    )}
                    name="chicksCount"
                />

                <Controller
                    control={control}
                    rules={{
                        required: 'O valor dos pintinhos é obrigatório',
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Valor de venda de cada pintinho (ex: 0.95)"
                            placeholder="Valor de venda de cada pintinho"
                            onBlur={onBlur}
                            onChange={onChange}
                            value={String(value)}
                            keyboardType="decimal-pad"
                            error={errors?.chickValue?.message}
                        />
                    )}
                    name="chickValue"
                />
            </View>
            <FooterButton title="SALVAR LOTE" onPress={handleSubmit(onSubmit)} />
        </>
    );
};

export default LotCreateScreen;
