import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent: 'center',
        backgroundColor: '#8257E5',
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        color: '#FFF',
        fontSize: 32,
        maxWidth: 180,
        lineHeight: 37,
        fontFamily: 'Archivo_700Bold',
    },

    description: {
        fontSize: 16,
        marginTop: 24,
        maxWidth: 240,
        lineHeight: 26,
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular'
    },

    okButton: {
        height: 58,
        borderRadius: 8,
        marginVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#04D361',
    },

    okButtonText:{
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },
});

export default styles;