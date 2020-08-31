import styled from 'styled-components';
import { colors } from '../../../sytles/colors';

export const Container = styled.View`
   background: red;
   flex: 1;
   width: 8px;
   margin-right: 22px;
   margin-top: 22px;
   margin-bottom: 22px;
   border-radius: 4px;
`;

export const NextInvoice = styled.View`
   background: ${colors.orange};
   width: 8px;
   border-top-left-radius: 4px;
   border-top-right-radius: 4px;
`;

export const CurrentInvoice = styled.View`
   background: ${colors.blue};
   width: 8px;
`;

export const AvailableLimit = styled.View`
   background: ${colors.green};
   width: 8px;
   border-bottom-left-radius: 4px;
   border-bottom-right-radius: 4px;
`;