import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

import products from '@assets/data/products'
import { defaultPizzaImage } from '@/components/ProductListItem'


const sizes = ['S', 'M', 'L', 'XL'];

const Product = () => {
  const { id } = useLocalSearchParams();

  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <Text>Product Not Founnd.</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: product?.name }}
      />
      <Image source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map(size => <View style={styles.size} key={size}><Text style={styles.sizeText}>{size}</Text></View>)}
      </View>

      <Text style={styles.price}>{product.price}</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  sizes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: "center"
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  price: {
    fontWeight: "bold",
    fontSize: 18
  }

})