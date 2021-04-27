import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RootScreen from '../screens/firstscreen/RootScreen'
import TabMain from './TabMain'
import Home from '../screens/home'

const StackRoot = createStackNavigator();

export default function App() {
    return (
        <StackRoot.Navigator
            mode={'modal'}
            headerMode={'none'}
            initialRouteName={'RootScreen'}
            screenOptions={{
                cardStyle: { backgroundColor: 'transparent' },
                animationEnabled: true,
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0, 0.5, 0.9, 1],
                            outputRange: [0, 0.25, 0.7, 1],
                        }),
                    },
                    overlayStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 0.2],
                            extrapolate: 'clamp',
                        }),
                    },

                }),
                ...TransitionPresets.FadeFromBottomAndroid,
            }}
        >
            {/* RootScreen */}
            <StackRoot.Screen name={'RootScreen'} component={RootScreen} />
            {/* Tabbar */}
            <StackRoot.Screen name={'TabMain'} component={TabMain} />
            <StackRoot.Screen name={'Home'} component={Home} />
        </StackRoot.Navigator>
    );
}