import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_XEobMoeBzM96eVONguba2qaY00Nh6IfHBO'; 

const  onToken = token =>{
        console.log(token)
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
        label ='Pay Now'
        name = ' Clothing Website '
        billingAddress
        shippingAddress
        currency='PKR'
        image='https://svgshare.com/i/CUz.svg'
        description={`Your Total is  RS ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken} 
        stripeKey={publishableKey}
        />
    );


};

export default StripeCheckoutButton

