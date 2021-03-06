import styled from 'styled-components';
import { colors } from '../../../../sytles/colors';

export const CardContainer = styled.View`
    flex: 1;
    background-color: #FFF
    border-radius: 4px;
    margin: 0 30px;
    height: 100%;
    z-index: 5;
    width: 350px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 30px;
`;

export const CardHeaderTitle = styled.Text`
    font-size: 13px;
    color: ${colors.lightGray};
    margin-left: 12px;
    font-weight: 300;
`;

export const CardContent = styled.View`
    flex: 1;
    padding: 0 30px;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
`;

export const Bold = styled.Text`
    font-weight: 700;
    color: ${colors.primary};
`;

export const Description = styled.Text`
    font-size: 30px;
    margin-top: 3px;
    color: #333;
    color: ${colors.primary};
`;
export const DescriptionSubtitle = styled.Text`
    font-size: 12px;
    margin-top: 3px;
    color: #333;
    color: ${colors.darkGray};
`;

export const CardFooter = styled.View`
    padding: 20px;
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
    margin-right: 12px;
`;