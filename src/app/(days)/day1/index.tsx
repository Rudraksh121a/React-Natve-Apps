import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{title:"Day1"}}/>
      <Text style={{fontFamily:"AmaticBold",fontSize:100}}>Create Splesh Screen and set up navigation</Text>
    </View>
  )
}

export default DayDetailsScreen

const styles = StyleSheet.create({
 
})