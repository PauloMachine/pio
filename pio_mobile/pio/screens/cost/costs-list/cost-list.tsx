import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './cost-list.styles';
import { CostListScreenProps } from './cost-list.types';
import { CostId } from '../cost.types';
import { useCosts } from '../costs.hooks';
import { formatDate } from '../../../utils/format-date';
import EmptyState from '../../../components/empty-state';
import SkeletonList from '../../../components/skeleton-list';
import FooterButton from '../../../components/footer/button';
import { formatMoney } from '../../../utils/format-money';


const CostListScreen = ({ navigation, route }: CostListScreenProps) => {
    const { aviaryId, lotId } = route.params;
    const { data, isFetching } = useCosts(lotId)

    const renderItem = ({ item }: { item: CostId }) => (
        <TouchableOpacity
            style={styles.touchableOpacityCost}
        >
            <View>
                <Text style={styles.textCost}>{item.costName}</Text>
                <Text style={styles.textCost}>{formatMoney(item.costValue)}</Text>
            </View>
            <Text style={styles.textCost}>{formatDate(new Date(item.createdAt), 'datetime')}</Text>
        </TouchableOpacity>
    );

    return (
        <>
            {isFetching && <SkeletonList />}
            {data?.length == 0 ? (
                <EmptyState text="Nenhum custo cadastrado" />
            ) : (
                <FlatList
                    data={data}
                    style={styles.flatListCost}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
            <FooterButton
                title="CADASTRAR CUSTO"
                onPress={() => navigation.navigate('CostCreate', { aviaryId, lotId })}
            />
        </>
    );
};

export default CostListScreen;
