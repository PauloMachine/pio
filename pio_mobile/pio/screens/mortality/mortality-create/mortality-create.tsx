import React from 'react';
import { View, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useCreateMortality, useMortalities } from '../mortality.hooks';
import FooterButton from '../../../components/footer/button';
import styles from './mortality-create.styles';
import { MortalityCreateScreenProps } from './mortality-create.types';
import { Mortality } from '../mortality.types';
import { useLot } from '../../lot/lot.hooks';
import Input from '../../../components/input';


const CreateMortalityScreen = ({ navigation, route }: MortalityCreateScreenProps) => {
    const { aviaryId, lotId } = route.params;
    const { refetch: refetchLot } = useLot(lotId)
    const { refetch: refetchMortalities } = useMortalities(lotId)
    const { control, handleSubmit, formState: { errors } } = useForm<Mortality>({
        defaultValues: {
            chicksMortalityCount: 0,
        },
    });

    const mutation = useCreateMortality({
        onSuccess: () => {
            refetchMortalities()
            refetchLot()
            Alert.alert('Cadastro de mortalidade realizado com sucesso.')
            navigation.navigate('MortalityList', { aviaryId, lotId });
        },
        onError: (error: unknown) => {
            Alert.alert('Erro ao realizar o cadastro de mortalidade.')
            console.log(error)
        },
    });

    const onSubmit = (data: Mortality) => {
        mutation.mutate({ lotId, mortality: data });
    };

    return (
        <>
            <View style={styles.viewMortalityCreate}>
                <Controller
                    control={control}
                    rules={{
                        required: 'A quantidade de mortalidade é obrigatória',
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Quantidade de mortalidade"
                            placeholder="Quantidade de mortalidade"
                            onBlur={onBlur}
                            onChange={onChange}
                            value={String(value)}
                            keyboardType="numeric"
                            error={errors?.chicksMortalityCount?.message}
                        />
                    )}
                    name="chicksMortalityCount"
                />
            </View>
            <FooterButton title="SALVAR MORTALIDADE" onPress={handleSubmit(onSubmit)} />
        </>
    );
};

export default CreateMortalityScreen;
