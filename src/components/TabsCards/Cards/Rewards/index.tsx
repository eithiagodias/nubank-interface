import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();
Icon.loadFont();

import {
    CardContainer,
    CardHeader,
    Description,
    DescriptionSubtitle,
    Bold,
    CardContent,
    CardFooter,
    Annotation,
    CardHeaderTitle,
    AnnotationText,
} from './styles';

const Rewards: React.FC = ({ index }) => {
    const [show, setShow] = useState(false);
    function showValue() {
        setShow(!show);
    }

    return (
        <CardContainer>
            <CardHeader>
                <Icon name="present" size={20} color="#aaa" />
                <CardHeaderTitle>Rewards</CardHeaderTitle>
            </CardHeader>
            <CardContent>
                <Description>
                    <Bold>26.664</Bold> pts
                </Description>
                <DescriptionSubtitle>
                    Você acumulou <Bold>5.737 pontos</Bold> nos ultimos 30 dias
                </DescriptionSubtitle>
            </CardContent>
            <CardFooter>
                <Annotation>
                    <MaterialCommunityIcons
                        name="silverware-variant"
                        size={24}
                        color="#444"
                    />
                    <AnnotationText>
                        Apagar compra de R$ 20,00 em Pizzaria Casanova com 2.000 pts
                    </AnnotationText>
                </Annotation>
                <Icon name="arrow-right" size={10} color="#444" />
            </CardFooter>
        </CardContainer>
    );
};

export default Rewards;
