import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './Allapps/First';

import Insta from './Allapps/Insta';

import News from './Allapps/AppNews';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
  
        <NavigationContainer>

            <Stack.Navigator>
                
                <Stack.Screen name="First" component={FirstScreen} />
                <Stack.Screen name="AppInsta" component={Insta} />
                <Stack.Screen name="AppNews" component={News} />
            </Stack.Navigator>

        </NavigationContainer>
    
 
  )
}

export default App

const styles = StyleSheet.create({})