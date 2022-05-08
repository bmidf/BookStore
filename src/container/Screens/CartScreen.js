import React from 'react'
import {StyleSheet,Text,TouchableOpacity,View,FlatList} from 'react-native'
import {useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/AntDesign';
import CartItem from './CartItem';
import books from './_books.json';

function CartScreen() {
    let navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.bottom}>
                <FlatList
                data={books}
                renderItem={({item}) =>(<CartItem item={item}/>)}
                keyExtractor={item =>item.id}/>
            </View>
            <View style={styles.bottomm}>
                <View>
                    <Text style={{color:"#9c9c9c"}}> Total</Text>
                    <Text style={{color:"#4f4f4f", fontSize: 25, fontWeight: "bold", }}>$24.99</Text>
                    <Text style={{color:"#9c9c9c"}}>Free Domestic Shipping</Text>
                </View>
                <View style={styles.placeOrder}>
                    <TouchableOpacity style={styles.placeOrderButton}  onPress={() => navigation.navigate("OrderPlaced")}>
                        <Text style={styles.placeOrderText}>PLACE ORDER</Text>
                        <Icon style={styles.icon} name="rightcircle" size={30} color='white'/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#f5f5f5"
    },
    bottom: {
        flex: 9,
        borderBottomWidth: 1,
        borderBottomColor: '#CFCFCF',

    },
    bottomm: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center' ,
    },
    placeOrder: { 
        flex: 1
    },
    placeOrderButton: {
        backgroundColor: "#6200EE",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 25
    },
    placeOrderText: {
        textAlign: 'center',
        marginLeft: 10,
        color: "#FFFFFF",
        fontSize: 17,
    },
    icon: {
        position: "absolute",
        right: 10,
    },
})
export default CartScreen;