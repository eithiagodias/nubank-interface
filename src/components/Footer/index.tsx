import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import { Container } from './styles';
import TabsItems from './TabsItems';

const Footer: React.FC = ({ translateY }) => {
    return (
        <Container>
            <TabsItems translateY={translateY} />
        </Container>
    );
};

export default Footer;
