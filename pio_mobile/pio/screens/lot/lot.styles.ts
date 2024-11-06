import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewLot: {
        backgroundColor: '#EEEEEE',
    },
    viewResource: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
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
    viewLots: {
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