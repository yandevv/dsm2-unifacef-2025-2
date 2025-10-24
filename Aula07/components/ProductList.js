import {
  memo,
} from 'react';
import {
  SectionList,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const ProductList = memo(function ProductList({ dados }) {
  const renderItems = ({ item }) => (
    <Text style={styles.item}>
      {item.name} - R$ {item.price.toFixed(2)}
    </Text>
  );

  return (
    <SectionList
      sections={dados}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItems}
      renderSectionHeader={({ section }) => (
        <Text style={styles.header}>{section.category}</Text>
      )}
    />
  );
});

export default ProductList;

const styles = StyleSheet.create({
  header: {
    width: width * 0.9,
    fontSize: 24,
    padding: 8,
    fontWeight: 'bold',
  },
  item: {
    padding: 8,
    fontSize: 18,
  },
});