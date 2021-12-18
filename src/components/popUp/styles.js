import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";

export default StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: colors.LIGHT_RED,
        position: 'absolute',
        bottom: 0
        
    },
    headerView: {
        flex: 1,
        justifyContent: 'center'
    },
    btnRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        width: 100,
        backgroundColor: colors.PRIMARY,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 5,
    },
    btnView: {
        position: 'absolute',
        bottom: 10,
        start: 20
    },
    btnView1: {
        position: 'absolute',
        bottom: 10,
        end: 20
    }
})