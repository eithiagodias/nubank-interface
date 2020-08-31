import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { Routes } from './routes';
import { colors } from './sytles/colors';

const App = () => {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.primary}
            />
            <Routes />
        </>
    );
};

export default App;
