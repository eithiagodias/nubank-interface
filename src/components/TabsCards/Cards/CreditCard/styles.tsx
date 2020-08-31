import styled from 'styled-components';
import { colors } from '../../../../sytles/colors';
import { Animated } from 'react-native';

export const CardContainer = styled(Animated.View)`
    flex: 1;
    background-color: #fff;
    border-radius: 4px;
    margin: 0 20px;
    margin-right: 40px;
    height: 100%;
    z-index: 5;
    width: 350px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 30px 30px 30px 0;
`;

export const CardHeaderTitle = styled.Text`
    font-size: 13px;
    color: ${colors.lightGray};
    margin-left: 12px;
    font-weight: 300;
`;

export const CardContent = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const CardContentLeft = styled.View`
    flex: 1;
    height: 100%;
    justify-content: center;
    padding: 0 0 0 30px;
`;

export const CardContentRight = styled.View`
    width: 20px;
    flex-direction: row-reverse;
`;

export const Title = styled.Text`
    font-size: 13px;
    color: ${colors.blue};
    font-weight: 700;
    text-transform: uppercase;
`;

export const CardContentSubTitle = styled.Text`
    font-size: 12px;
    font-weight: 300;
`;

export const Limit = styled.Text`
    font-size: 13px;
    color: ${colors.green};
    font-weight: 900;
    text-transform: uppercase;
`;

export const Description = styled.Text`
    font-size: 32px;
    margin-top: 3px;
    color: ${colors.blue};
`;

export const DescriptionContent = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Bold = styled.Text`
    font-weight: 700;
`;

export const CardFooter = styled.View`
    padding: 20px 20px;
    background: #eee;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 80px;
`;

export const Annotation = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const AnnotationText = styled.Text`
    font-size: 11px;
    color: #444;
    margin-left: 8px;
    margin-right: 18px;
`;
