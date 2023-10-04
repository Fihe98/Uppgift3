import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AndraVyn from './AndraVyn';
import StartVy from './StartVy';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='StartVy' component={StartVy} />

        <Stack.Screen name='AndraVyn' component={AndraVyn} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}