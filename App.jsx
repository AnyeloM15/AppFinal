import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import ProductDetails from './src/screen/ProductDetails';
import CartScreen from './src/screen/CartScreen';
import AccountScreen from './src/screen/AccountScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyHomeStack = () => {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetails} />
      </Stack.Navigator>
    
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        initialRouteName='CARD'
      >
        <Tab.Screen
          name="HOME_STACK"
          component={MyHomeStack}
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="CARD"
          component={CartScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <Entypo name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <Entypo name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
