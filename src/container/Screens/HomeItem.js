import React from 'react';
import { View, StyleSheet, TouchableOpacity , Text, Image } from 'react-native';

const HomeItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container} >
      <Image style={styles.image} source={{ uri: item.cover }} />
      <View style={styles.titlee}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.authorr}>
        <Text style={styles.author}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '50%',
  },
  titlee: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  authorr: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  image: {
    marginTop: 10,
    height: 200,
    width: 150,
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
    marginRight: 5,
  },
  author: {
    fontSize: 15,
    color: 'grey',
    marginBottom: 5
  },
});
export default HomeItem;
