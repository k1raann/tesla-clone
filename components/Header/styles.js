import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        width : "100%",
        display : 'flex',
        justifyContent : 'space-between',
        flexDirection : 'row',
        top : 50,
        position : 'absolute',
        zIndex : 100,
        paddingHorizontal : 20
    },
    logo : {
        width : 100,
        height : 20,
        resizeMode : 'contain'
    },
    menu : {
        width : 25,
        height : 25,
        resizeMode : 'contain'
    }
})

export default styles;