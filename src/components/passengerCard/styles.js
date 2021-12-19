import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";

export default StyleSheet.create({
    wrapper: {
        width: '100%',
        borderRadius: 10,
        elevation: 5,
        height: 170,
        overflow: 'hidden',
        backgroundColor: colors.PRIMARY,
        opacity: 0.7
    },
    flightImage:{
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.7
    },
    imageView:{
        width: '100%',
        height: 20
    },
    details:{
        flex: 2,
        paddingHorizontal: 10,
        paddingTop: 25,
    },
    nameView:{
        flexDirection: 'row'
    },
    nameViews:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    paragraph:{
        fontWeight: 'bold',
        paddingEnd: 10,
        fontSize: 20
    },
    paragraph1:{
        paddingEnd: 10,
        fontSize: 20
    },
    editBtn: {
        backgroundColor: colors.DARK_BLUE,
        width: 100,
        height: 30,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    editBtnText:{
        fontSize: 12,
        color: colors.WHITE
    }
})