import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

export default function StyledButton(props) {
  const {type, content} = props;
  const bgColor = (type === 'primary')?'#171A20CC':'#F4F4F480';
  const textColor = type === 'primary'?'white':'black';
  return (
    <View style = {styles.container}>
          <Pressable style = {[styles.button, {backgroundColor:bgColor}]}>
            <Text style = {[styles.label, {color : textColor}]}>
            {content}
            </Text>
          </Pressable>
    </View>
  )
}