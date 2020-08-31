import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';

const { Navigator, Screen } = createStackNavigator();

const RoutesNavigator = () => (
    <Navigator headerMode="none">
        <Screen name="Main" component={Main} />
    </Navigator>
);

export const Routes = () => (
    <NavigationContainer>
        <RoutesNavigator />
    </NavigationContainer>
);

export default Routes;
