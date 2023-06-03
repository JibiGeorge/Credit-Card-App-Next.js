import React from 'react'
import Card from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const Cards = () => {
    return (
        <Card
            number='1234567890123456'
            name='Jibi George'
            expiry='24/56'
            cvc='54252'
        />
    )
}

export default Cards