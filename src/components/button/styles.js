import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";

export default StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: colors.WHITE
    }
})