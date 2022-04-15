import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import Iconicons from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import { Home } from 'screens';
import Membership from 'screens/Membership/Membership';
import { ICON_SIZE, TAB_FOCUSED_LABEL_COLOR, TAB_LABEL_COLOR } from 'constants/styles';

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: TAB_FOCUSED_LABEL_COLOR,
          tabBarInactiveTintColor: TAB_LABEL_COLOR,
          tabBarLabel: 'Homie',
          tabBarIcon: ({ focused }) => <Iconicons name="home" style={[styles.icon, focused ? styles.iconFocused : null]} />
        }}
      />
      <BottomTab.Screen
        name="Membership"
        component={Membership}
        options={{
          tabBarActiveTintColor: TAB_FOCUSED_LABEL_COLOR,
          tabBarInactiveTintColor: TAB_LABEL_COLOR,
          tabBarLabel: 'Đặc quyền',
          tabBarIcon: ({ focused }) => <IconFA name="crown" style={[styles.icon, focused ? styles.iconFocused : null]} />
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({
  icon: {
    fontSize: ICON_SIZE,
    color: TAB_LABEL_COLOR
  },
  iconFocused: {
    color: TAB_FOCUSED_LABEL_COLOR,
  },
  label: {
    color: TAB_LABEL_COLOR
  },
  labelFocused: {
    color: TAB_FOCUSED_LABEL_COLOR,
  }
})