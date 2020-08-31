import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import { Container } from './styles';

import Header from '../../components/Header';
import TabsCards from '../../components/TabsCards';

const Main: React.FC = () => {
    return (
        <Container>
            <Header />
            <TabsCards />
        </Container>
    );
};

export default Main;
