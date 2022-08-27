import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    carContainer: {
        width : '100%',
        height : Dimensions.get("window").height
      },
      textContainer : {
       marginTop : '30%',
       width : '100%',
       alignItems : 'center' 
      },
      mainText:{
        fontSize : 40,
        fontWeight : '500'
      },
      subText:{
        color: 'gray'
      },
      infoText:{
        textDecorationLine : 'underline',
      },
      image : {
        width : '100%',
        height:'100%',
        resizeMode: 'cover',
        position:'absolute'
      },
      buttonContainer :{
        bottom : 50,
        position:'absolute',
        width : '100%'
      }
})

export default styles;