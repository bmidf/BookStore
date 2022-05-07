import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Alert ,StatusBar} from "react-native";
import BookDetails from "./Screens/BookDetails";
import { connect } from "react-redux";

function AddCart({item = []}) {
    return (
        <SafeAreaView >
            <ScrollView style={{marginHorizontal: 10}}>
                {item.map((item) => <BookDetails key={item.id} 
                AddCart = {()=>{Alert.alert(
                        "Are you sure you want to add item in cart?",
                          [
                            {
                            text: "CANCEL",
                            },
                            {
                              text: "YES",
                            },
                          ]
                    );
                }}
                item={item} />)}
            </ScrollView>
        </SafeAreaView>
    )
}
const mapStateToProps = (state) => {
    const { item } = state;
    return { item };
};

export default connect(mapStateToProps)(AddCart);