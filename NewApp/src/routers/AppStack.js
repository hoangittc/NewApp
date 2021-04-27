import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainApp from './MainApp'
import Utils from '../app/Utils';

const AppStack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer ref={navigatorRef => { Utils.setTopLevelNavigator(navigatorRef) }}>
            <AppStack.Navigator headerMode="none" mode="modal" initialRouteName={'RootMain'} >
                <AppStack.Screen name={'RootMain'} component={MainApp} />
                {/* Modal message */}
            </AppStack.Navigator>
        </NavigationContainer>
    );
}