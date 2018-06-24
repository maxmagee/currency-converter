import React from 'react';
import { FlatList, Text, StatusBar, SafeAreaView } from 'react-native';

import currencies from '../data/currencies';

const CurrencyList = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle="default" translucent={false} />
    <FlatList
      data={currencies}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={item => item}
    />
  </SafeAreaView>
);

export default CurrencyList;
