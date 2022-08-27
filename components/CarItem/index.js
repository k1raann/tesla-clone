import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import StyledButton from '../StyledButton'

export default function CarItem(props) {
  const {model, tagline, subtag, image} = props.car.item;
  return (
      <View style = {styles.carContainer}>
      <ImageBackground source={image} style = {styles.image}/>
        <View style = {styles.textContainer}>
            <Text style = {styles.mainText}>{model}</Text>
            <Text style = {styles.subText}>{tagline}{' '}
            <Text style = {styles.infoText}>{subtag}</Text>
            </Text>
        </View>
        <View style = {styles.buttonContainer}>
        <StyledButton type='primary' content = "Customer order"/>
        <StyledButton type='secondary' content = "Existing inventory"/>
        </View>
      </View>
  )
}