import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 250,
        maxHeight: 250
    },
    legendItem: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
    },
    legendItemValue: {
        marginHorizontal: 10,
        fontWeight: "bold",
    },
    title: {
        width: 10,
        height: 10,
        borderRadius: 100,
    }
});

export default styles