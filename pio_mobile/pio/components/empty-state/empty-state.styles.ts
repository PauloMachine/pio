import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imageEmptyState: {
        width: '50%',
        height: '50%',
    },
    viewEmptyState: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#e0e1db',
        height: '100%'
    },
    textEmptyState: {
        color: '#444',
        fontWeight: '200',
        position: 'absolute',
        top: 50,
        fontSize: 20,
    },
    textPioEmptyState: {
        color: '#444',
        fontWeight: 'bold',
        position: 'absolute',
        top: 25,
        fontSize: 15,
    }
});
