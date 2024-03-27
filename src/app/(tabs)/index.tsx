import { ScrollView, FlatList } from 'react-native';

import products from '@assets/data/products';

import ProductListItem from '@components/ProductListItem';


export default function MenuScreen() {
  return (
      <FlatList
        data={products} 
        renderItem={({ item, index }) => <ProductListItem product={item} key={`product-item-${index}`} />}
        numColumns={2}  // Defines the number of columns layout
        contentContainerStyle={{ gap: 10, padding: 10 }}  // Styles for individual rows
        columnWrapperStyle={{ gap: 10 }}  // Styles for columns in each row.
      />
  );
}
