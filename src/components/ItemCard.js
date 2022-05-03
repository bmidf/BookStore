import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


const ItemCard = ({
  itemDetails
}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.image} source={{uri: itemDetails.imgUrl}}
        onPress={() => {console.log("someth")}} />
      </View>
      <Text style={styles.title} onPress={() => {}}>{itemDetails.label}</Text>
      <Text style={styles.price}>{itemDetails.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
    margin: 1,
    backgroundColor: 'white',
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    aspectRatio: 1,
    alignSelf: 'center'
  },
  title: {
    marginTop: 10,
    fontSize: 15
  },
  price: {
    fontSize: 15,
    marginTop: 5,
    color: "grey",
  }
});

export default ItemCard;
