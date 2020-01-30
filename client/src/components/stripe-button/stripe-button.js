// import React from "react";
// import StripeCheckout from "react-stripe-checkout";
// import axios from "axios";

// const StripeCheckoutButton = ({ price }) => {
//   const priceForStripe = price * 100;
//   const publishableKey = "pk_test_uVLkpg9RT3M61GFPT6ONju83003Rjwfkvj";
//   const onToken = token => {
//     // axios is a function that receives an object with the properties that we need to pass
//     // it then gives back a promise
//     axios({
//       url: "payment", // request to the payment route. Appends "payment" to current route
//       method: "post",
//       data: {
//         amount: priceForStripe,
//         token
//       }
//     })
//       .then(response => {
//         alert("Payment successful");
//       })
//       .catch(error => {
//         console.log("Payment error: ", error);
//         alert(
//           "There was an issue with your payment. Please make sure you use the provided credit card"
//         );
//       });
//   };

//   return (
//     <StripeCheckout
//       label="Pay Now"
//       name="CROWN Clothing Ltd."
//       billingAddress
//       shippingAddress
//       image="https://svgshare.com/i/CUz.svg"
//       description={`Your total is $${price}`}
//       amount={priceForStripe}
//       panelLabel="Pay Now"
//       token={onToken}
//       stripeKey={publishableKey}
//     />
//   );
// };

// export default StripeCheckoutButton;
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_uVLkpg9RT3M61GFPT6ONju83003Rjwfkvj";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert("succesful payment");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
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

export default StripeCheckoutButton;
