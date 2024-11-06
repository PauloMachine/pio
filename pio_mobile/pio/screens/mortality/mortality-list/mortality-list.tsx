import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './mortality-list.styles';
import { MortalityListScreenProps } from './mortality-list.types';
import { MortalityId } from '../mortality.types';
import { useMortalities } from '../mortality.hooks';
import { formatDate } from '../../../utils/format-date';
import EmptyState from '../../../components/empty-state';
import SkeletonList from '../../../components/skeleton-list';
import FooterButton from '../../../components/footer/button';


const MortalityListScreen = ({ navigation, route }: MortalityListScreenProps) => {
    const { aviaryId, lotId } = route.params;
    const { data, isFetching } = useMortalities(lotId)

    const renderItem = ({ item }: { item: MortalityId }) => (
        <TouchableOpacity
            style={styles.touchableOpacityMortality}
        >
            <Text style={styles.textMortality}>{item.chicksMortalityCount} mortalidades</Text>
            <Text style={styles.textMortality}>{formatDate(new Date(item.createdAt), 'datetime')}</Text>
        </TouchableOpacity>
    );

    return (
        <>
            {isFetching && <SkeletonList />}
            {data?.length == 0 ? (
                <EmptyState text="Nenhuma mortalidade cadastrada" />
            ) : (
                <FlatList
                    data={data}
                    style={styles.flatListMortality}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
            <FooterButton
                title="CADASTRAR MORTALIDADE"
                onPress={() => navigation.navigate('MortalityCreate', { aviaryId, lotId })}
            />
        </>
    );
};

export default MortalityListScreen;
