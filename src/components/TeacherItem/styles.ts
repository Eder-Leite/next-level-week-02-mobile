import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        borderColor: '#E6E6F0',
        backgroundColor: '#FFF'
    },

    profile: {
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#EEE'
    },

    profileInfo: {
        marginLeft: 16,
    },

    name: {
        fontSize: 20,
        color: '#32254D',
        fontFamily: 'Archivo_700Bold',
    },

    subject: {
        marginTop: 4,
        fontSize: 12,
        color: '#6A6180',
        fontFamily: 'Poppins_400Regular',
    },

    bio: {
        fontSize: 14,
        lineHeight: 24,
        color: '#6A6180',
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
    },

    footer: {
        padding: 24,
        marginTop: 24,
        alignItems: 'center',
        backgroundColor: '#FAFAFC',
    },

    price: {
        fontSize: 14,
        color: '#6A6180',
        fontFamily: 'Poppins_400Regular',
    },

    priceValue: {
        fontSize: 16,
        color: '#8257E5',
        fontFamily: 'Archivo_700Bold',
    },

    buttonsContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },

    favoriteButton: {
        width: 56,
        height: 56,
        marginRight: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8257E5',
    },

    favorited: {
        backgroundColor: '#E33D3D',
    },

    contactButton: {
        flex: 1,
        height: 56,
        marginRight: 8,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#04D361',
    },

    contactButtonText: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
        fontFamily: 'Archivo_700Bold',
    },
});

export default styles;