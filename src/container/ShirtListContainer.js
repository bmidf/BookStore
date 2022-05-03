import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
//import { useScreenOrientation } from '@use-expo/screen-orientation';
import ItemCard from '../components/ItemCard';

const IMAGES = [
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0001_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0002_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0003_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0004_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0005_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0006_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0007_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0008_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0009_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0010_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0011_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0012_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0013_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0014_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0015_fashion_image.jpg" },
  { label: "V Neck shirt - Lime", price: "$24.99", imgUrl: "https://training.pyther.com/fashion-images/0016_fashion_image.jpg" },
];

const ShirtListContainer = () => {
  //const [orientationObj] = useScreenOrientation();
  return (
    <View style={styles.container}>
      <FlatList
        data={IMAGES}
        contentContainerStyle={{display: 'flex', marginHorizontal: 10 }}
        numColumns={2}
        renderItem={({item}) => <ItemCard itemDetails={item} />}
        keyExtractor={(item) => item.imgUrl}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    color: 'white',
  },
  title: {
    fontWeight: "bold",
    marginHorizontal: 20,
  },
});

export default ShirtListContainer;
