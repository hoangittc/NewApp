import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home'
import User from '../screens/user'
import Settings from '../screens/settings'

const Tab = createBottomTabNavigator();

export default function TabMain() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="User" component={User} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}