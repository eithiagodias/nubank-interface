import React from 'react';

import {
    Container,
    NextInvoice,
    CurrentInvoice,
    AvailableLimit,
} from './styles';

const CreditCardLimitBar: React.FC = () => {
    const limit = {
        nextInvoice: 18.5,
        currentInvoice: 30,
        availableLimit: 51.4
    };

    return (
        <Container>
            <NextInvoice style={{ height: limit.nextInvoice + '%' }} />
            <CurrentInvoice style={{ height: limit.currentInvoice + '%' }} />
            <AvailableLimit style={{ height: limit.availableLimit + '%' }} />
        </Container>
    );
};

export default CreditCardLimitBar;
