import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
Icon.loadFont();

import {
    CardContainer,
    CardHeader,
    CardHeaderTitle,
    Title,
    Description,
    DescriptionContent,
    CardContent,
    CardContentLeft,
    CardContentRight,
    CardContentSubTitle,
    Limit,
    CardFooter,
    Annotation,
    Bold,
    AnnotationText,
} from './styles';

import CreditCardLimitBar from '../../CreditCardLimitBar';

const CreditCard: React.FC = ({ index }) => {
    return (
        <CardContainer>
            <CardContent>
                <CardContentLeft>
                    <CardHeader>
                        <Icon name="credit-card" size={20} color="#aaa" />
                        <CardHeaderTitle>Cartão de Crédito</CardHeaderTitle>
                    </CardHeader>
                    <DescriptionContent>
                        <Title>Fatura Atual</Title>
                        <Description>
                            R$ <Bold>7.276</Bold>,83
                        </Description>
                        <CardContentSubTitle>
                            Limite disponível <Limit>R$ 13.538,10</Limit>
                        </CardContentSubTitle>
                    </DescriptionContent>
                </CardContentLeft>
                <CardContentRight>
                    <CreditCardLimitBar />
                </CardContentRight>
            </CardContent>
            <CardFooter>
                <Annotation>
                    <Icon name="credit-card" size={24} color="#444" />
                    <AnnotationText>
                        Compra mais recente em Shopping Metropole no valor de R$3.856,00 segunda
                    </AnnotationText>
                </Annotation>
                <Icon name="arrow-right" size={10} color="#444" />
            </CardFooter>
        </CardContainer>
    );
};

export default CreditCard;
