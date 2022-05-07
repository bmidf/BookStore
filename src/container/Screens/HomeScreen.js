import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, FlatList, Alert ,StatusBar} from "react-native";
import ItemCard from "./ItemCard";
import { connect } from "react-redux";

function HomeScreen({item = []}) {
    return (
            <ScrollView style={{marginHorizontal: 10}}>
                {item.map((item) => <ItemCard key={item.id} 
                item={item} />)}
            </ScrollView>
    )
}

const mapStateToProps = (state) => {
  const { item } = state;
  return { item };
};

export default connect(mapStateToProps)(HomeScreen);