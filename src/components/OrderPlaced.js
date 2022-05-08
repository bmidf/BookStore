import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

function OrderPlaced() {
    return (
        <View style={styles.container}>
            <View style={styles.middle}>
                <Icon style={styles.icon} name="check" size={70} color="#B2002D"/>
            </View>
                <Text style={styles.text}>Order Placed!</Text>
                <Text style={styles.textt}>Your order was placed successfully.</Text>
            <TouchableOpacity style={[styles.button]} >
                <Text style={styles.texttt}>MY ORDERS</Text>
                <Icon name="rightcircle" size={30} color='white'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middle: {
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70,
        borderRadius: 100,
    },
    text: {
        fontSize:30,
        color: 'gray',
    },
    textt: {
        fontSize:20,
        color: 'gray',
    },
    button: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 130,
        width: 200,
        borderRadius: 30,
        backgroundColor: "#6200EE"
    },
    icon: {
        color: "#6200EE"
    },
    texttt: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        marginRight: 22
    },
  });
  export default OrderPlaced;