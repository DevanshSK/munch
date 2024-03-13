import { Image, StyleSheet } from "react-native"
import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

import { Product } from "@assets/types";
type ProductListItemProps = {
    product: Product
}

const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image || 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png' }} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    image: {
        width: "100%",
        aspectRatio: 1
    },
    price: {
        color: Colors.light.tint,
        fontWeight: 'bold'
    },
});


export default ProductListItem;