import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewAviary: {
        backgroundColor: '#EEEEEE'
    },
    flatListLot: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    touchableOpacityLot: {
        padding: 20,
        width: '100%',
        borderRadius: 5,
        marginVertical: 0,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewLot: {
        gap: 5,
    },
    textLot: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    textLotDates: {
        fontSize: 14,
        color: '#333',
        fontWeight: '300',
    },
});

export default styles