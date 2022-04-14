import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from 'screens';
import { Icon } from 'native-base';
import Iconicons from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: 'Homie',
          tabBarIcon: ({ focused }) => <Iconicons name="home" size={30} />
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})