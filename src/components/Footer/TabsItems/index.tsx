import React from 'react';

import { Container, TabsContainer, TabItem, TabText, styles } from './styles';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
Icon.loadFont();

const TabsItems: React.FC = ({ translateY }) => {
    const MAX_TRANSLATE_Y = 480;

    return (
        <Container
            style={{
                transform: [{
                    translateY: translateY.interpolate({
                        inputRange: [1, MAX_TRANSLATE_Y],
                        outputRange: [1, 30],
                        extrapolate: 'clamp',
                    }),
                }],
                opacity: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [1, 0.1],
                    extrapolate: 'clamp',
                }),
            }}
        >
            <TabsContainer>
                <TabItem>
                    <Icon name="user-follow" size={24} color="#fff" />
                    <TabText> Indicar Amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="screen-smartphone" size={24} color="#fff" />
                    <TabText>Recarga de celular</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="wallet" size={24} color="#fff" />
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="pie-chart" size={24} color="#fff" />
                    <TabText>Dividir valor</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="like" size={24} color="#fff" />
                    <TabText>Empréstimos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="emotsmile" size={24} color="#fff" />
                    <TabText>Doação</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="wallet" size={24} color="#fff" />
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="reload" size={24} color="#fff" />
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="equalizer" size={24} color="#fff" />
                    <TabText>Ajustar Limite</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="question" size={24} color="#fff" />
                    <TabText>Me Ajuda</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="calculator" size={24} color="#fff" />
                    <TabText>Pagar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock-open" size={24} color="#fff" />
                    <TabText>Bloquear Cartão</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="credit-card" size={24} color="#fff" />
                    <TabText>Cartão Virtual</TabText>
                </TabItem>
                <TabItem style={styles.transparentTabItem}>
                    <Icon name="directions" size={24} color="#fff" />
                    <TabText>Organizar Atalhos</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
};

export default TabsItems;
