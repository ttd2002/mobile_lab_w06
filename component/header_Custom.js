import { View, Text, StyleSheet,TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const header_Custom = () => {
  return (
    <View style = {styles.container}>
        <Icon name='search' size={20}/>
      <TextInput placeholder='Dây cáp usb'/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: 700,
        height: 200,
        paddingHorizontal: 10,
    }
})
export default header_Custom