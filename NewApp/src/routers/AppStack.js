import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainApp from './MainApp'
import Utils from '../app/Utils';
import MessageBox from '../screens/messagebox/MessageBox'
import { Animated, Easing } from 'react-native';

const AppStack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer ref={navigatorRef => { Utils.setTopLevelNavigator(navigatorRef) }}>
            <AppStack.Navigator headerMode="none" mode="modal" initialRouteName={'RootMain'} >
                <AppStack.Screen name={'RootMain'} component={MainApp} />
                {/* Modal message */}
                <AppStack.Screen name={'MessageBox'} component={MessageBox}
                    options={{
                        cardStyle: { backgroundColor: 'transparent' }, animationEnabled: false,
                        navigationOptions: {
                            gesturesEnabled: false,
                            transitionConfig: () => ({
                                containerStyle: {
                                    backgroundColor: 'transparent'
                                },
                                transitionSpec: {
                                    duration: 0,
                                    timing: Animated.timing,
                                    easing: Easing.step0,
                                }
                            }),
                        }
                    }} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}