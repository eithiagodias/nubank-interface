import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconFeather from 'react-native-vector-icons/Feather';
IconFeather.loadFont();
Icon.loadFont();

import {
    CardContainer,
    CardHeader,
    Title,
    Description,
    DescriptionHide,
    CardContent,
    CardFooter,
    Annotation,
    CardHeaderTitle,
    CardHeaderContainer,
    AnnotationText,
} from './styles';

const BankAccount: React.FC = ({ index }) => {
    const [show, setShow] = useState(false);
    function showValue() {
        setShow(!show);
    }

    return (
        <CardContainer>
            <CardHeader>
                <CardHeaderContainer>
                    <IconFeather name="dollar-sign" size={20} color="#aaa" />
                    <CardHeaderTitle>Conta</CardHeaderTitle>
                </CardHeaderContainer>
                <IconFeather
                    name={!show ? 'eye' : 'eye-off'}
                    size={20}
                    color="#aaa"
                    onPress={showValue}
                />
            </CardHeader>
            <CardContent>
                <Title>Saldo disponivel</Title>
                {show ? (
                    <Description>R$ 980.611,65</Description>
                ) : (
                        <DescriptionHide />
                    )}
            </CardContent>
            <CardFooter>
                <Annotation>
                    <IconFeather name="repeat" size={24} color="#444" />
                    <AnnotationText>
                        Transferência de R$ 20,00 recebida de Gabriella Medeiros
                    </AnnotationText>
                </Annotation>
                <Icon name="arrow-right" size={10} color="#444" />
            </CardFooter>
        </CardContainer>
    );
};

export default BankAccount;
