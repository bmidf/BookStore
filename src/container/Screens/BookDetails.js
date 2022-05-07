import React from 'react';
import { Text, StyleSheet,TouchableHighlight, View ,Image} from "react-native";
import { useNavigation } from '@react-navigation/core';

export default function BookDetails({item,AddCart}) {
    let navigation = useNavigation();
    const {id,name,image,by,year,buy}=item;
    return (
        <View style={styles.container}>
            <Image source={{uri: image }}   style={styles.imagee} />
            <View style={styles.containeer}>
                <Text style={styles.name} >{name}</Text>
                <Text style={styles.textt}>by: {by}</Text>
                <Text style={styles.textt}>Year: {year}</Text>
                <Text style={styles.textt}>Buy:{buy}</Text>
                
                <View  style={styles.button} >
                    <TouchableHighlight style={[styles.More]} 
                        onPress={()=>{  }}>
                        <Text style={styles.text}>More</Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={[styles.AddCart]} 
                        onPress={()=>{AddCart(id);}}>
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
        flex: 1,
        height: 200,
    },
    containeer: {
        flex: 2,
        marginLeft: 10,
        marginBottom: 40
    },
    button: {
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
        color: 'white',
        fontSize: 15,
    },
    name: {
      fontSize: 32,
    },
    textt: {
        fontSize: 20,
        color: "black",
    }
  });