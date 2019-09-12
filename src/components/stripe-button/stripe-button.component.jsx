import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_VC5x09vsqqQ3dsl5wse6YnHb00cGX6qYES';

    const onToken = token => {
        console.log(token);
        alert('Payement successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Buy My Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;