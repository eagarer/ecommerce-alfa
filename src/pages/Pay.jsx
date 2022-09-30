/* eslint-disable no-unused-expressions */
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";

const KEY =
  "pk_test_51Lma2zFcv0k9aeTH84Xnz6mv4wdqK716q2YAwoSaHSvzLSaZnPAtNgmgMrgsHCdKlEPEdmEASBUOYGlpOxddkEs800dFH8qd5u";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Alfa Shop"
        image="https://toppng.com/uploads/preview/symantec-recruiting-site-wolf-logo-11563192561hy0s8dafqo.png"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
            alignItem: "center",
            
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
