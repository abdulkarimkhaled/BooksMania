import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import { calcHeight, calcWidth } from '../../config/metrics';

const colors = AppStyles.Color

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.LIGHT_GRAY
    },
    headerContainer: {
        backgroundColor: colors.LIGHT_GRAY,
        width: '100%',
        paddingVertical: calcHeight(2),
        alignItems: 'center',
        marginBottom: calcHeight(20)
    },
    headerText: {
        color: colors.BLACK,
        fontSize: calcWidth(18),
    },
    searchContainer: {
        width: calcWidth(300),
        backgroundColor: colors.WHITE,
        paddingVertical: calcHeight(8),
        paddingHorizontal: calcWidth(8),
        borderRadius: calcWidth(8),
        borderWidth: calcWidth(.5),
        borderColor: colors.rgba(0, 0, 0, .5)
    },
    rowContainer: {
        flexDirection: 'row'
    },
    hintText: {
        width: calcWidth(300),
        paddingHorizontal: calcWidth(8),
        marginTop: calcHeight(2)
    },
    bookContainer: {
        flexDirection: 'row',
        width: calcWidth(300),
        marginTop: calcHeight(10),
        borderRadius: calcWidth(6),
        overflow: 'hidden',
    },
    coverImage: {
        width: calcWidth(100),
        height: calcHeight(100)
    },
    title:{
        color:colors.BLACK,
        fontSize:calcWidth(16),
        marginLeft:calcWidth(6),
        fontWeight:'700',
        width:calcWidth(190)
    },
    noBooksFound:{
        marginTop:calcHeight(200),
        fontSize:calcWidth(18)
    },
    pages:{
        marginLeft:calcWidth(6),
        fontSize:calcWidth(14),
        marginTop:calcHeight(2),
        fontWeight:'500'
    }
});

export default styles;
