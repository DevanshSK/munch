import { Image, Pressable, StyleSheet } from "react-native"
import Colors from "@/constants/Colors";
import { Text, View } from "./Themed";

import { Product } from "@/types";
import { Link } from "expo-router";
type ProductListItemProps = {
    product: Product
}

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
        <Link href={`/menu/${product.id}`} asChild>
            <Pressable
                style={styles.container}
            >
                <Image
                    source={{ uri: product.image || defaultPizzaImage }}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    {product.name}
                </Text>
                <Text style={styles.price}>
                    ${product.price}
                </Text>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        fontFamily: "Space-Mono"
    },
    image: {
        width: "100%",
        aspectRatio: 1
    },
    price: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        fontFamily: "Space-Mono"
    },
});


export default ProductListItem;