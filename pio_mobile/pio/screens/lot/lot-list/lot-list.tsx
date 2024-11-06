import React from 'react';
import { Text, FlatList, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import styles from './lot-list.styles';
import { LotListScreenProps } from './lot-list.types';
import FooterButton from '../../../components/footer/button';
import { LotId } from '../lot.types';
import { useLots } from '../lot.hooks';
import { formatDate } from '../../../utils/format-date';
import EmptyState from '../../../components/empty-state';
import SkeletonList from '../../../components/skeleton-list';
import { useAviary } from '../../aviary/aviary.hooks';
import CustomPieChart from '../../../components/pie-chart';


const LotListScreen = ({ navigation, route }: LotListScreenProps) => {
    const { aviaryId } = route.params;
    const { data: aviary, isFetching: isFetchingAviary } = useAviary(aviaryId)
    const { data: lots, isFetching: isFetchingLots } = useLots(aviaryId)
    const { height } = useWindowDimensions()

    const chartData = [
        {
            name: "Valor bruto",
            total: aviary?.grossValue || 0,
            color: "#4285F4",
        },
        {
            name: "Valor líquido",
            total: aviary?.netValue || 0,
            color: "#34A853"
        },
        {
            name: "Custos",
            total: aviary?.totalCosts || 0,
            color: "#EA4335"
        },
    ];

    const renderItem = ({ item, index }: { item: LotId, index: number }) => {
        const status = {
            color: item.finishedAt ? '#0F9D58' : '#4285F4',
            text: item.finishedAt ? 'FINALIZADO' : 'EM ANDAMENTO'
        }

        return (
            <TouchableOpacity
                style={[styles.touchableOpacityLot, { marginTop: index === 0 ? 15 : 0 }]}
                onPress={() => navigation.navigate('Lot', { aviaryId: item.aviaryId, lotId: item.id })}
            >
                <View style={styles.viewLot}>
                    <Text style={styles.textLot}>Lote {lots && lots.length - index}</Text>
                    <Text style={styles.textLotDates}>{`Iniciado em: ${item.createdAt && formatDate(new Date(String(item?.createdAt)))}`}</Text>
                    {item.finishedAt && (
                        <Text style={styles.textLotDates}>{`Finalizado em: ${formatDate(new Date(String(item?.finishedAt)))}`}</Text>
                    )}
                </View>
                <Text style={{ color: status.color }}>{status.text}</Text>
            </TouchableOpacity>
        )
    };

    return (
        <>
            {isFetchingAviary || isFetchingLots && <SkeletonList />}
            {lots?.length == 0 ? (
                <EmptyState text="Sem nenhum lote cadastrado" />
            ) : (
                <View style={[styles.viewAviary, { height }]}>
                    {aviary?.grossValue !== 0 && (
                        <CustomPieChart
                            data={chartData}
                            accessor="total"
                            title="Lucratividade do meu aviário (lotes finalizados)"
                        />
                    )}

                    <FlatList
                        data={lots}
                        style={styles.flatListLot}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            )}
            <FooterButton
                title="CADASTRAR LOTE"
                onPress={() => navigation.navigate('LotCreate', { aviaryId })}
            />
        </>
    );
};

export default LotListScreen;
