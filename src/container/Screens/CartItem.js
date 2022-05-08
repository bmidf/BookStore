import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.radius}>
        <Image style={styles.image} source={{ uri: item.cover }} />
      </View>
      <View style={styles.containeer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.price}>{item.cost}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity >
            <Text style={styles.increase}>-</Text>
          </TouchableOpacity>
          <Text style={styles.number}>1</Text>
          <TouchableOpacity>
            <Text style={styles.increase}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        flexDirection: 'row',
        marginBottom: 10,
    },
    radius: {
        width: '40%',
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: '50%',
        height: 100,
    },
    containeer: {
        flex: 2,
        padding: 13,
        marginRight: 30,
        justifyContent: 'space-between',
    },
    text: {
        fontFamily: 'Montserrat_500Medium',
    },
    price: {
        color: 'red'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 70,
    },
    increase: {
        width: 20,
        borderRadius: 50,
        backgroundColor: '#dedede',
        textAlign: 'center',
        color: 'grey'
    },
    number:{
        color: 'grey',
    },
})
export default CartItem;