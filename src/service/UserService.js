import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useReducer } from 'react';

const userDetail = {
    checked:false,
    user:{}
}
const AppCon = createContext();
export const userData = {
    accounts: [{
        name: 'admin',
        email: 'something@gmail.com',
        password: 'admin'
      },
    ],
    currentLoggedUser: {},
  };
  
  

export const getUser = () =>(userDetail);

export const loadUser = async () =>{
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('user').then((value) => {
            userDetail.checked = true;
            if(value == null){
                resolve({})
            }else{
                let user = JSON.parse(value);
                resolve(user);
            }
        });
    })
}

export const setUser = (user) =>{
    console.log("user",user);
    AsyncStorage.setItem('user', JSON.stringify(user));
}

export const removeUser = () =>{
    AsyncStorage.removeItem('user');
}