import React from 'react';
import { View, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useCreateCost, useCosts } from '../costs.hooks';
import FooterButton from '../../../components/footer/button';
import styles from './cost-create.styles';
import { CostCreateScreenProps } from './cost-create.types';
import { Cost } from '../cost.types';
import { useLot } from '../../lot/lot.hooks';
import Input from '../../../components/input';


const CreateCostScreen = ({ navigation, route }: CostCreateScreenProps) => {
    const { aviaryId, lotId } = route.params;
    const { refetch: refetchLot } = useLot(lotId)
    const { refetch: refetchCosts } = useCosts(lotId)
    const { control, handleSubmit, formState: { errors } } = useForm<Cost>({
        defaultValues: {
            costName: '',
            costValue: 0,
        },
    });

    const mutation = useCreateCost({
        onSuccess: () => {
            refetchCosts()
            refetchLot()
            Alert.alert('Cadastro de custo realizado com sucesso.')
            navigation.navigate('CostList', { aviaryId, lotId });
        },
        onError: (error: unknown) => {
            Alert.alert('Erro ao realizar o cadastro de custo.')
            console.log(error)
        },
    });

    const onSubmit = (data: Cost) => {
        mutation.mutate({ lotId, cost: data });
    };

    return (
        <>
            <View style={styles.viewCostCreate}>
                <Controller
                    control={control}
                    rules={{
                        required: 'O nome do custo é obrigatório',
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Nome do custo"
                            placeholder="Nome do custo"
                            onBlur={onBlur}
                            onChange={onChange}
                            value={String(value)}
                            error={errors?.costName?.message}
                        />
                    )}
                    name="costName"
                />
                <Controller
                    control={control}
                    rules={{
                        required: 'O valor do custo é obrigatório',
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Valor do custo"
                            placeholder="Valor do custo"
                            onBlur={onBlur}
                            onChange={onChange}
                            value={String(value)}
                            keyboardType="numeric"
                            error={errors?.costValue?.message}
                        />
                    )}
                    name="costValue"
                />
            </View>
            <FooterButton title="SALVAR CUSTO" onPress={handleSubmit(onSubmit)} />
        </>
    );
};

export default CreateCostScreen;
