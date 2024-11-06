import React from 'react';
import { View, Text, TouchableOpacity, Alert, useWindowDimensions, Linking } from 'react-native';
import styles from './lot.styles';
import { LotProps } from './lot-list/lot-list.types';
import { useFinishLot, useLot, useLots } from './lot.hooks';
import SkeletonList from '../../components/skeleton-list';
import CustomPieChart from '../../components/pie-chart';
import FooterButton from '../../components/footer/button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useCosts } from '../cost/costs.hooks';
import { useMortalities } from '../mortality/mortality.hooks';


const LotScreen = ({ navigation, route }: LotProps) => {
    const { aviaryId, lotId } = route.params;
    const { data: lot } = useLot(lotId)
    const { data: costs } = useCosts(lotId)
    const { data: mortalities } = useMortalities(lotId)
    const { refetch: refetchLots } = useLots(aviaryId)
    const { height } = useWindowDimensions()

    const chartData = [
        {
            name: "Valor bruto",
            total: lot?.grossValue || 0,
            color: "#4285F4",
        },
        {
            name: "Valor líquido",
            total: lot?.netValue || 0,
            color: "#34A853"
        },
        {
            name: "Custo de mortalidade",
            total: (lot?.chicksMortalityCount || 0) * (lot?.chickValue || 0),
            color: "#EA4335"
        },
        {
            name: "Outros custos",
            total: lot?.totalCosts || 0,
            color: "#EA4335"
        }
    ];

    const mutation = useFinishLot({
        onSuccess: () => {
            Alert.alert('Lote finalizado com sucesso.');
            refetchLots()
            navigation.navigate('LotList', { aviaryId });
        },
        onError: (error: unknown) => {
            Alert.alert('Erro ao finalizar o lote.');
            console.log(error);
        },
    });

    const onSubmit = () => {
        mutation.mutate(lotId);
    };

    const shareToWhatsApp = () => {
        const message = "*Título em Negrito*\n\nAqui está a *mensagem importante* que quero compartilhar!\n\nE aqui vai mais uma linha com espaços extras.";
        const url = `whatsapp://send?text=${encodeURIComponent(message)}`;

        Linking.openURL(url)
            .catch((err) => Alert.alert('Erro', 'Parece que o WhatsApp não está instalado no seu dispositivo.'));
    };

    return (
        <>
            <View style={[styles.viewLot, { height }]}>
                <TouchableOpacity
                    style={[
                        styles.viewResource,
                        {
                            marginVertical: 10,
                            justifyContent: 'center',
                            gap: 10
                        }
                    ]}
                    onPress={() => shareToWhatsApp()}
                >
                    <Icon name="whatsapp" size={24} color="#075E54" />
                    <Text>
                        Compartilhar via Whatsapp
                    </Text>
                </TouchableOpacity>
                {lot?.grossValue !== 0 && (
                    <CustomPieChart
                        data={chartData}
                        accessor="total"
                        title={
                            `Lucratividade do meu lote ${lot?.finishedAt ? '(finalizado)' : '(em andamento)'}`
                        }
                    />
                )}
                <View style={{ gap: 10, marginTop: 10 }}>
                    <View style={styles.viewResource}>
                        <Text>
                            Registro de mortalidades: {mortalities?.length || 0}
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MortalityList', { aviaryId, lotId })}
                        >
                            <Text style={{ color: '#bf4c37' }}>
                                GERENCIAR
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewResource}>
                        <Text>
                            Registro de outros custos: {costs?.length || 0}
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CostList', { aviaryId, lotId })}
                        >
                            <Text style={{ color: '#bf4c37' }}>
                                GERENCIAR
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <FooterButton
                title="FINALIZAR LOTE"
                onPress={onSubmit}
                disabled={Boolean(lot?.finishedAt)}
            />
        </>
    );
};

export default LotScreen;
