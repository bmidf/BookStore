import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function ItemCard({item}) {
  const {id,name,image,price}=item;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}}/>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    alignSelf: 'center'
  },
});

