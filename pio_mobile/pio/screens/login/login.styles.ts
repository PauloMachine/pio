import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaViewLogin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bf4c37'
    },
    imageLogo: {
        width: 250,
        height: 250,
    },
    viewFormLogin: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableOpacityLogin: {
        padding: 10,
        width: '80%',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#fff",
        alignItems: 'center',
        borderStyle: 'solid',
    },
    textLogin: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold'
    },
    textError: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'flex-start'
    },
    textInputLogin: {
        height: 40,
        padding: 10,
        width: '80%',
        borderWidth: 1,
        borderRadius: 8,
        color: '#bf4c37',
        marginVertical: 10,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
});

export default styles