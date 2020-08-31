import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { Animated } from 'react-native';

export const Container = styled.View`
    min-height: 400px;
    position: relative;
    z-index: 5;
`;

export const ContentContainer = styled(Animated.View)`
    flex: 1;
    padding: 0 2px 20px;
    position: absolute;
    top: 15%;
`;
// AQUI
export const Content = styled.View`
    min-height: 360px;
    align-items: center;
    margin-top: 30px;
`;

export const ScrollIndicators = styled.View`
    margin-top: 12px;
    flex-direction: row;
    justify-content: center;
`;

export const Indicator = styled.View`
    height: 8px;
    width: 8px;
    background: rgba(255, 255, 2555, 0.6);
    border-radius: 8px;
    margin: 4px;
`;

export const TabsContainer = styled(Animated.ScrollView).attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 10 },
    showsHorizontalScrollIndicator: false,
})``;

export const styles = StyleSheet.create({
    activeIndicator: {
        backgroundColor: '#fff',
    },
});