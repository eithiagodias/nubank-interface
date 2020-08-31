import React from 'react';

import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
Icon.loadFont();

import {
    Container,
    Code,
    Info,
    InfoText,
    InfoTextBold,
    ContainerMenu,
    Nav,
    NavItem,
    NavText,
    SubNavText,
    ArrowIcon,
    ExitButton,
    ExitButtonText,
} from './styles';

import { colors } from '../../../sytles/colors';

const Menu: React.FC = ({ translateY }) => {
    return (
        <Container
            style={{
                opacity: translateY.interpolate({
                    inputRange: [-1, 480],
                    outputRange: [0, 1],
                }),
            }}
        >
            <ContainerMenu>
                <Code>
                    <QRCode
                        value="https://eithiagodias.com"
                        size={80}
                        fgColor="#fff"
                        bgColor={colors.primary}
                    />
                </Code>
                <Info>
                    <InfoText>
                        Banco{' '}
                        <InfoTextBold>260 - Nu Pagamentos S.A</InfoTextBold>
                    </InfoText>
                    <InfoText>
                        Agência <InfoTextBold>0001</InfoTextBold>
                    </InfoText>
                    <InfoText>
                        Conta <InfoTextBold>3826987-3</InfoTextBold>
                    </InfoText>
                </Info>
                <Nav>
                    <NavItem>
                        <Icon name="info" size={20} color="#FFF" />
                        <NavText>Me ajuda</NavText>
                        <ArrowIcon>
                            <Icon name="arrow-right" size={12} color="#FFF" />
                        </ArrowIcon>
                    </NavItem>
                    <NavItem>
                        <Icon name="user" size={20} color="#FFF" />
                        <NavText>
                            Perfil{'\n'}
                            <SubNavText>
                                Nome de preferência, telefone, e-mail
                            </SubNavText>
                        </NavText>
                        <ArrowIcon>
                            <Icon name="arrow-right" size={12} color="#FFF" />
                        </ArrowIcon>
                    </NavItem>
                    <NavItem>
                        <Icon name="equalizer" size={20} color="#FFF" />
                        <NavText>Configurar Conta</NavText>
                        <ArrowIcon>
                            <Icon name="arrow-right" size={12} color="#FFF" />
                        </ArrowIcon>
                    </NavItem>
                    <NavItem>
                        <Icon name="equalizer" size={20} color="#FFF" />
                        <NavText>Configurar Cartão</NavText>
                        <ArrowIcon>
                            <Icon name="arrow-right" size={12} color="#FFF" />
                        </ArrowIcon>
                    </NavItem>
                    <NavItem>
                        <Icon name="equalizer" size={20} color="#FFF" />
                        <NavText>Configurar Rewards</NavText>
                        <ArrowIcon>
                            <Icon name="arrow-right" size={12} color="#FFF" />
                        </ArrowIcon>
                    </NavItem>
                    <NavItem>
                        <Icon name="share-alt" size={20} color="#FFF" />
                        <NavText>Pedir conta PJ</NavText>
                        <ArrowIcon>
                            <Icon name="arrow-right" size={12} color="#FFF" />
                        </ArrowIcon>
                    </NavItem>
                    <NavItem>
                        <Icon name="share-alt" size={20} color="#FFF" />
                        <NavText>Configuracões do App</NavText>
                        <ArrowIcon>
                            <Icon name="arrow-right" size={12} color="#FFF" />
                        </ArrowIcon>
                    </NavItem>
                </Nav>
                <ExitButton>
                    <ExitButtonText>SAIR DO APP</ExitButtonText>
                </ExitButton>
            </ContainerMenu>
        </Container>
    );
};

export default Menu;
