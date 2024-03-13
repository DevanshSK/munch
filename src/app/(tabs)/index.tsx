import { View } from '@components/Themed';

import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';
import { ScrollView } from 'react-native';


export default function MenuScreen() {
  return (
    <ScrollView >
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </ScrollView>
  );
}
