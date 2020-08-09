import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent: 'center',
        backgroundColor: '#8257E5',
    },

    banner: {
        width: '100%',
        resizeMode: 'contain',
    },

    title: {
        color: '#FFF',
        fontSize: 20,
        marginTop: 80,
        lineHeight: 30,
        fontFamily: 'Poppins_400Regular',
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        padding: 24,
        width: '48%',
        borderRadius: 8,
        backgroundColor: '#333',
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: '#9871F5',
    },

    buttonSecondary: {
        backgroundColor: '#04D361',
    },

    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Archivo_700Bold'
    },

    totalConnections: {
        fontSize: 12,
        maxWidth: 140,
        marginTop: 40,
        lineHeight: 20,
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular',
    }
});

export default styles;