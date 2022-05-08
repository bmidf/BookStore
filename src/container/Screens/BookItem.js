import React from 'react';
import {Text,StyleSheet,TouchableHighlight,View,Image} from "react-native";

const BookItem = ({item,AddCart}) =>{
    return (
        <View style={styles.container}>
            <Image source={{uri:item.cover}} style={styles.imagee}/>
            <View style={styles.containeer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.textt}>By:{item.author}</Text>
                <Text style={styles.textt}>Year:{item.year}</Text>
                <Text style={styles.textt}>Buy:{item.cost}</Text>
                
                <View  style={styles.button} >
                    <TouchableHighlight style={[styles.More]} 
                        onPress={()=>{  }}>
                        <Text style={styles.text}>More</Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={[styles.AddCart]} 
                        onPress={()=>{AddCart(item.id);}}>
                        <Text style={styles.text}> + Add Cart</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 240,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    imagee: {
        marginTop: 9,
        flex: 1,
        height: 200,
    },
    title:{
        marginTop: 10,
        fontSize: 25,
        color: 'grey',
        fontFamily: "Montserrat_500Medium"
    },
    textt: {
        fontSize: 15,
        marginTop: 4,
        color: 'grey',
        fontFamily: "Montserrat_500Medium",
    },
    containeer: {
        flex: 2,
        marginLeft: 10,
        marginBottom: 40
    },
    button: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    More: {
        backgroundColor: "#6200EE",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10
    },
    AddCart: {
        backgroundColor: "#6200EE",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10
    },
    text: {
        fontSize: 15,
        color: 'white',
    }
});
export default BookItem;