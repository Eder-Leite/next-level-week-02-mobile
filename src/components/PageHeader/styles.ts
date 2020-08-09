import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#8257E5'
    },

    topBar: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        color: '#FFF',
        fontSize: 24,
        maxWidth: 160,
        lineHeight: 32,
        marginVertical: 40,
        fontFamily: 'Archivo_700Bold',
    },
});

export default styles;