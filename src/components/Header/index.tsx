import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import { Container, Top, Logo, Title } from './styles';
const LOGO = require('../../assets/logo/Nubank_Logo.png');

const Header: React.FC = () => {
    return (
        <Container>
            <Top>
                <Logo source={LOGO} />
                <Title>Thiago</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#fff" />
        </Container>
    );
};

export default Header;
