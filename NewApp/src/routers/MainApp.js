import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import StackRoot from './StackRoot'
import Modal_Color from '../screens/modal/modal_color'
const MainApp = createStackNavigator();

export default function App() {
    return (
        <MainApp.Navigator
            mode={'modal'}
            headerMode={'none'}
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
            <MainApp.Screen name={'Root'} component={StackRoot} />
            {/* Modals call is here */}
            <MainApp.Screen name={'Modal_Color'} component={Modal_Color} />
        </MainApp.Navigator>
    );
}