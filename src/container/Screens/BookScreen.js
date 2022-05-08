import React from 'react';
import {View,Alert,FlatList} from "react-native";
import BookItem from "./BookItem";
import books from './_books.json';

function AddCart() {
    return (
        <View style={{marginHorizontal: 10}}>
            <FlatList data={books}  
            renderItem={({item}) => (<BookItem key={item.id} data={books}
            AddCart = {()=>{Alert.alert("Are you sure you want to add item in cart?",
                [
                    {
                        text: "CANCEL",
                    },
                    {
                        text: "YES",
                    },
                ]);
            }}item={item}/>)}/>
        </View>
    )
}
export default AddCart;