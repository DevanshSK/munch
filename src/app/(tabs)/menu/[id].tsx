import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const Product = () => {
  const {id} = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen 
        options={{ title: "Details: " + id}}
      />
      <Text>Product {id}</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})