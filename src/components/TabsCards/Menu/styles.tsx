import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components';

export const Container = styled(Animated.ScrollView)`
   margin: 0 30px;
`;

export const ContainerMenu = styled.View`
   width: 100%;
`;

export const Code = styled.View`
   background: #fff;
   padding: 10px;
   align-self: center;
`;

export const Info = styled.View`
   margin-top: 10px;
   align-items: center;
`;

export const InfoText = styled.Text`
   font-size: 13px;
   color: #fff;
   margin-left: 20px;
`;

export const InfoTextBold = styled.Text`
   font-weight: bold;
`;

export const Nav = styled.View`
   margin-top: 30px;
   border-top-width: ${StyleSheet.hairlineWidth}px;
   border-top-color: rgba(255, 255, 255, .8);
`;

export const NavItem = styled.View`
   flex-direction: row;
   align-items: center;
   padding: 12px 0;
   border-bottom-width: ${StyleSheet.hairlineWidth}px;
   border-bottom-color: rgba(255, 255, 2555, 0.8);
`;

export const NavText = styled.Text`
   font-size: 14px;
   color: #fff;
   margin-left: 20px;
`;

export const SubNavText = styled.Text`
   font-size: 10px;
   color: rgba(255, 255, 2555, 0.6);
   margin-left: 20px;
`;

export const ArrowIcon = styled.View`
   align-self: center;
   margin-left: auto;
`;

export const ExitButton = styled.TouchableOpacity`
   padding: 12px;
   border-width: ${StyleSheet.hairlineWidth}px;
   border-color: rgba(255, 255, 2555, 0.8);
   border-radius: 4px;
   justify-content: center;
   align-items: center;
   padding: 8px;
   margin-top: 15px;
`;

export const ExitButtonText = styled.Text`
   color: #fff;
   font-weight: bold;
   font-size: 10px;
   padding: 4px;
`;