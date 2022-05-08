import React from 'react';
import {View,FlatList} from 'react-native';
import books from './_books.json';
import HomeItem from './HomeItem';

const HomeScreen = () => {
  return (
    <View>
      <View>
        <FlatList
          data={books}
          numColumns={2}
          renderItem={({item}) => (<HomeItem item={item}/>)}
          keyExtractor={item => item.id}/>
      </View>
    </View>
  );
};
export default HomeScreen;