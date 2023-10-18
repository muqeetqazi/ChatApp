import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import Signup from './Signup';
import ChatScreens from './ChatScreens';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen" >
        <Stack.Screen options={{headerShown:false}} name="WelcomeScreen" component={WelcomeScreen} />
<Stack.Screen name="Signup" component={Signup}/>       
<Stack.Screen name="ChatScreens" component={ChatScreens}/>       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
