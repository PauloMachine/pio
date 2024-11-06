import { Text, FlatList, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import styles from './aviary-list.styles';
import { AviaryListScreenProps } from './aviary-list.types';
import FooterButton from '../../../components/footer/button/button';
import { AviaryId } from '../aviary.types';
import { useAviaries } from '../aviary.hooks';
import EmptyState from '../../../components/empty-state';
import SkeletonList from '../../../components/skeleton-list';
import CustomPieChart from '../../../components/pie-chart';

const AviaryListScreen = ({ navigation }: AviaryListScreenProps) => {
    const { data: aviaries, isFetching } = useAviaries();
    const { height } = useWindowDimensions();

    const aggregatedData = aviaries?.reduce(
        (acc, aviary) => {
            acc.grossValue += aviary.grossValue || 0;
            acc.netValue += aviary.netValue || 0;
            acc.totalCosts += aviary.totalCosts || 0;
            return acc;
        },
        { grossValue: 0, netValue: 0, totalCosts: 0 }
    );

    const chartData = [
        {
            name: "Valor bruto",
            total: aggregatedData?.grossValue || 0,
            color: "#4285F4",
        },
        {
            name: "Valor líquido",
            total: aggregatedData?.netValue || 0,
            color: "#34A853"
        },
        {
            name: "Custos",
            total: aggregatedData?.totalCosts || 0,
            color: "#EA4335"
        },
    ];

    const renderItem = ({ item, index }: { item: AviaryId, index: number }) => (
        <TouchableOpacity
            style={[styles.touchableOpacityAviary, { marginTop: index === 0 ? 15 : 0 }]}
            onPress={() => navigation.navigate('LotList', { aviaryId: item.id })}
        >
            <Text style={styles.textAviary}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <>
            {isFetching && <SkeletonList />}
            {aviaries?.length == 0 ? (
                <EmptyState text="Nenhum aviário cadastrado" />
            ) : (
                <View style={[styles.viewAviary, { height }]}>
                    {aggregatedData && aggregatedData.grossValue > 0 && (
                        <CustomPieChart
                            data={chartData}
                            accessor="total"
                            title="Lucratividade dos meus aviários (lotes finalizados)"
                        />
                    )}

                    <FlatList
                        data={aviaries}
                        style={styles.flatListAviary}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            )}
            <FooterButton
                title="CADASTRAR AVIÁRIO"
                onPress={() => navigation.navigate('AviaryCreate')}
            />
        </>
    );
};

export default AviaryListScreen;
