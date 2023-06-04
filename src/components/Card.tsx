import React from 'react'
import Card from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

interface CardsProps {
    watch?: any;
    focused?: any;
}
const Cards: React.FC<CardsProps> = ({ watch, focused }) => {

    return (
        <Card
            number={watch("cardNumber", "")}
            name={watch("holderName", "")}
            expiry={watch("cardExpiry", "")}
            cvc={watch("cvc", "")}
            focused={focused}
        />
    )
}

export default Cards