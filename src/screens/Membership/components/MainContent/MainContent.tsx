import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Brand from './Brand/Brand';
import VinIDPoint from './VinIDPoint/VinIDPoint';
import Vouchers from './Vouchers/Vouchers';

const Tab = createMaterialTopTabNavigator();

const MainContent = () => {

  return (
    <Tab.Navigator
      style={styles.tabContainer}
      screenOptions={{
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen name="Vouchers" component={Vouchers} options={{ tabBarLabel: 'Vouchers' }} />
      <Tab.Screen name="Brand" component={Brand} options={{ tabBarLabel: 'Brand' }} />
      <Tab.Screen name="VinIDPoint" component={VinIDPoint} options={{ tabBarLabel: 'VinID Point' }} />
    </Tab.Navigator>
  )
}

export default MainContent

const styles = StyleSheet.create({
  tabContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabBarLabel: {
    textTransform: "none",
    fontSize: 15
  }
})