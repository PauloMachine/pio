import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './empty-state.styles';
import { EmptyStateProps } from './empty-state-types';

const EmptyState = ({ text }: EmptyStateProps) => {
    return (
        <View style={styles.viewEmptyState}>
            <Image source={require('../../assets/emptyState.jpeg')} style={styles.imageEmptyState} />
            <Text style={styles.textPioEmptyState}>pio...pio</Text>
            <Text style={styles.textEmptyState}>{text}</Text>
        </View>
    );
}

export default EmptyState;