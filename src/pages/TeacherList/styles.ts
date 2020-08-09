import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7'
    },

    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 24,
    },

    label: {
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular',
    },

    input: {
        height: 54,
        marginTop: 4,
        marginBottom: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%',
    },

    submitButton: {
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#04D361',
    },

    submitButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold',
    },
});

export default styles;