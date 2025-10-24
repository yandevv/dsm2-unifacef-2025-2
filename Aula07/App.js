import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import ProductList from './components/ProductList';

export default function App() {
  const dados = [
    {
      category: 'Eletrônicos',
      data: [
        {
          name: 'Notebook',
          price: 1999.99
        },
        {
          name: 'Smartphone',
          price: 2999.99
        },
        {
          name: 'TV',
          price: 1499.99
        }
      ]
    },
    {
      category: 'Roupas',
      data: [
        {
          name: 'Camiseta',
          price: 29.99
        },
        {
          name: 'Calça',
          price: 59.99
        },
        {
          name: 'Jaqueta',
          price: 99.99
        },
      ],
    },
  ];
  const [data, setData] = useState(dados);

  function handleDataSearch(text) {
    for(const sections of dados) {
      const filteredItems = sections.data.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      sections.data = filteredItems;
    }
    const filteredData = dados.filter(section => section.data.length > 0);
    setData(filteredData);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          placeholder="Pesquisar..."
          style={styles.searchTextInput}
          onChangeText={handleDataSearch}
        />
        <ProductList dados={data} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  searchTextInput: {
    height: 32,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    margin: 8,
    paddingLeft: 8,
  }
});