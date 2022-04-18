import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ICON_SIZE, TAB_FOCUSED_LABEL_COLOR, TAB_LABEL_COLOR } from 'constants/styles';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import Iconicons from 'react-native-vector-icons/Ionicons';
import { Home, Membership, QRCode } from 'screens';

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
      <BottomTab.Screen
        name="QR"
        component={QRCode}
        options={{
          tabBarButton: () => <Pressable style={{ padding: 10 }}>
            <IconFA name="qrcode" style={styles.qrButton} size={20} />
          </Pressable>
        }}
      />
      <BottomTab.Screen
        name="Inbox"
        component={QRCode}
        options={{
          tabBarActiveTintColor: TAB_FOCUSED_LABEL_COLOR,
          tabBarInactiveTintColor: TAB_LABEL_COLOR,
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ focused }) => <Iconicons name="mail-outline" style={[styles.icon, focused ? styles.iconFocused : null]} />
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={QRCode}
        options={{
          tabBarActiveTintColor: TAB_FOCUSED_LABEL_COLOR,
          tabBarInactiveTintColor: TAB_LABEL_COLOR,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => <IconFeather name="user" style={[styles.icon, focused ? styles.iconFocused : null]} />
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
  },
  qrButton: {
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
    borderRadius: 5
  }
})