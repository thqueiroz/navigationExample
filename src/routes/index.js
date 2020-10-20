import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaA from '../pages/TelaA';
import TelaB from '../pages/TelaB';
import TelaC from '../pages/TelaC';


const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="TelaA" component={TelaA} />
                <Screen name="TelaB" component={TelaB} />
                <Screen name="TelaC" component={TelaC} />
            </Navigator>
        </NavigationContainer>
    );
};

export default AppStack;