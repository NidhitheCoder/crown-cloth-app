import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutbutton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HZZ4tFvRwE4Wol9AkNw6VN8QtvZr4ew0G4UIXRALm1Osw3MMIUeXq1qJAqwRuXq08Lf9ySTjeiUZM8eWIMQ2eax00x2zmHAAm";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing .Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutbutton;
